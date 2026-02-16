-- ============================================================
-- Supabase RLS Policy: students table — Admin Only Access
-- ============================================================
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor)
--
-- This script:
-- 1. Enables Row Level Security (RLS) on the `students` table
-- 2. Drops any existing permissive policies on the table
-- 3. Creates a single policy allowing SELECT, INSERT, UPDATE,
--    and DELETE ONLY for users whose `profiles.role = 'admin'`
-- 4. Students have ZERO access to this table
-- ============================================================

-- Step 1: Enable RLS (idempotent — safe to re-run)
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

-- Step 2: Drop existing policies if any (prevents duplicates on re-run)
DO $$
DECLARE
    pol RECORD;
BEGIN
    FOR pol IN
        SELECT policyname
        FROM pg_policies
        WHERE schemaname = 'public' AND tablename = 'students'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.students', pol.policyname);
    END LOOP;
END
$$;

-- Step 3: Create admin-only policy for ALL operations
CREATE POLICY "admin_only_access"
ON public.students
FOR ALL
USING (
    EXISTS (
        SELECT 1
        FROM public.profiles
        WHERE profiles.id = auth.uid()
          AND profiles.role = 'admin'
    )
)
WITH CHECK (
    EXISTS (
        SELECT 1
        FROM public.profiles
        WHERE profiles.id = auth.uid()
          AND profiles.role = 'admin'
    )
);

-- ============================================================
-- Verification: Run these queries AFTER applying the above
-- ============================================================

-- Check RLS is enabled:
-- SELECT relname, relrowsecurity
-- FROM pg_class
-- WHERE relname = 'students';
-- Expected: relrowsecurity = true

-- Check the policy exists:
-- SELECT policyname, cmd, qual
-- FROM pg_policies
-- WHERE tablename = 'students';
-- Expected: admin_only_access policy with ALL command
