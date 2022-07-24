import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRecoilState } from 'recoil'

import linkService from '../../services/link.service'
import { linkState } from '../../recoil/atoms/atom'

export const CreateLinkForm = () => {
  const [links, setlinks] = useRecoilState<any>(linkState)

  const validationSchema = Yup.object().shape({
    url: Yup.string().required('Enter your long URL').url('URL is invalid'),
    custom_url: Yup.string(),
    password: Yup.string(),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }
  const { register, handleSubmit, formState, setError, reset } =
    useForm(formOptions)
  const { errors } = formState
  const onSubmit = (data: any) => {
    linkService
      .createLink({
        target: data.url,
      })
      .then((create_link_response) => {
        if (create_link_response.statusCode === 201) {
          const new_link: any = create_link_response.data
          setlinks([new_link, ...links])
          reset()
        }
      })
  }

  return (
    <div className="mt-1 bg-white">
      <div className="flex space-x-12">
        <p className="flex w-full items-center text-lg font-medium text-gray-600 focus:outline-none">
          Create your short URL.
        </p>
      </div>
      <hr className="my-5" />
      <div className="w-full lg:px-36">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <div>
              <input
                id="url"
                type="text"
                placeholder="Pasts your long URL."
                className="
							text-md w-full rounded-full bg-gray-100 py-4 px-5 text-gray-800
							focus:bg-white focus:text-gray-800 focus:shadow-lg focus:outline-none"
                {...register('url')}
              />
            </div>
            <div className="flex gap-10">
              <input
                id="custom_url"
                type="text"
                placeholder="Custom URL"
                className="
							text-md w-full rounded-full bg-gray-100 py-4 px-5 text-gray-800
							focus:bg-white focus:text-gray-800 focus:shadow-lg focus:outline-none"
                {...register('custom_url')}
              />
              <input
                id="url"
                type="password"
                placeholder="Password"
                className="
							text-md w-full rounded-full bg-gray-100 py-4 px-5 text-gray-800
							focus:bg-white focus:text-gray-800 focus:shadow-lg focus:outline-none"
                {...register('password')}
              />
            </div>
          </div>
          <button type="submit" />
        </form>
      </div>
    </div>
  )
}
