import { useEffect, useState } from "react";


const useSignUpWithGoogle = ({values}) => {
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if (values.role) {
          setIsDisabled(false);
        } else {
          setIsDisabled(true);
        }
      }, [values]);

 return {isDisabled}
}

export default useSignUpWithGoogle;