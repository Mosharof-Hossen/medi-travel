import { useGetAllClinicQuery } from '../../redux/services/clinic/clinic.api';
import { IHospitals } from '../../types/global';
import SectionTitle from '../SectionTitle/SectionTitle';
import CustomSpinner from '../Spinner/CustomSpinner';

const Hospitals = () => {
    const { data, isFetching } = useGetAllClinicQuery(undefined) as {
        data?: {
            data?: IHospitals[];
            message: string;
            success?: boolean;
            meta: null | number;
        }
        isFetching: boolean;
    }
    console.log(data?.data);
    return (
        <div>
            <SectionTitle heading='Top Hospitals' subHeading='---------------------'></SectionTitle>

<div>
    {
        isFetching ? 
        <CustomSpinner></CustomSpinner>
        :
        <div>
            {
                
            }
        </div>
    }
</div>
        </div>
    );
};

export default Hospitals;