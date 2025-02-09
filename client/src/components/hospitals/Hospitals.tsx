import { useGetAllClinicQuery } from '../../redux/services/clinic/clinic.api';
import { IHospitals } from '../../types/global';
import SectionTitle from '../SectionTitle/SectionTitle';
import CustomSpinner from '../Spinner/CustomSpinner';
import HospitalCart from './HospitalCart';

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
        <div className='p-4'>
            <SectionTitle heading='Top Hospitals' subHeading='---------------------'></SectionTitle>

            <div>
                {
                    isFetching ?
                        <CustomSpinner></CustomSpinner>
                        :
                        <div className=' grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-8 px-2 md:px-0'>
                            {
                                data?.data?.map((hospital) => <HospitalCart hospital={hospital} key={hospital._id} ></HospitalCart>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Hospitals;