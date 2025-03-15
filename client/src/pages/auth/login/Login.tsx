import { useAuthContext } from '@/contexts/AuthContext';
import { PageRoute } from '@/types';
import { supabase } from '@/utils/supabaseClient';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';

interface LoginDetails {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const { setSession } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginDetails>();

  const onSubmit = handleSubmit(async (val: LoginDetails) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: val.email,
      password: val.password,
    });

    if (error) {
      console.error('Error logging in:', error.message);
      return;
    }

    setSession(data.session);
    reset();
    navigate(PageRoute.LANDING);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input {...register('email')} placeholder="bill@gmail.com" />
        {errors?.email && <p>{errors.email.message}</p>}

        <input type="password" {...register('password')} />
        {errors?.password && <p>{errors.password.message}</p>}

        <input type="submit" />
      </form>
      <Link to={PageRoute.REGISTER}>Register</Link>
    </>
  );
}
