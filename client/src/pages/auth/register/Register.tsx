import { useAuthContext } from '@/contexts/AuthContext';
import { useToastNotification } from '@/hooks/useToastNotification';
import { PageRoute } from '@/types';
import { supabase } from '@/utils/supabaseClient';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useSearchParams } from 'react-router';

interface RegisterDetails {
  email: string;
  username: string;
  password: string;
}
export default function Register() {
  const navigate = useNavigate();
  const { setSession } = useAuthContext();
  const { emitToast } = useToastNotification();

  const [searchParams, _] = useSearchParams();
  const redirectLink = searchParams.get('redirect');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterDetails>();

  const onSubmit = handleSubmit(async (val: RegisterDetails) => {
    const { data, error } = await supabase.auth.signUp({
      email: val.email,
      password: val.password,
    });

    if (error) {
      emitToast(error.message, 'error');
      return;
    }

    setSession(data.session);
    reset();
    navigate(`${PageRoute.LOGIN}?redirect=${redirectLink}`);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input {...register('username')} placeholder="Bill" />
        {errors?.username && <p>{errors.username.message}</p>}

        <input {...register('email')} placeholder="bill@gmail.com" />
        {errors?.email && <p>{errors.email.message}</p>}

        <input type="password" {...register('password')} />
        {errors?.password && <p>{errors.password.message}</p>}

        <input type="submit" />
      </form>
      <Link to={`${PageRoute.LOGIN}?redirect=${redirectLink}`}>Login</Link>
    </>
  );
}
