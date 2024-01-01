import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export function ArticleHeader() {
  const router = useRouter();
  const handleBack = () => {
    console.log('handleBack');
    router.back();
  }

  return (
    <div className="h-16">
      <div onClick={handleBack}>
        <IoArrowBack className="h-16 w-16 text-gray-600 p-5 hover:text-black"  />
      </div>
    </div>
  )
}
