import React, { useEffect } from 'react';
import { RecentExtractsStyles } from './styles/RecentExtractsStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTextExtracts } from '../../reducers/text-extract/textExtractSlice';
import BoxLoader from '../../components/BoxLoader';
import { Link } from 'react-router-dom';

const RecentExtracts = () => {
    const dispatch = useDispatch();
    const { isLoading, recentTextExtracts } = useSelector((store) => store.textExtract);

    useEffect(() => {
        dispatch(getAllTextExtracts());
    }, [dispatch]);

    return (
        <RecentExtractsStyles>
            <BoxLoader isLoading={isLoading}>
                {!isLoading && (
                    recentTextExtracts.data.length > 0 ? (
                        <div className='text-extract-list'>
                            {recentTextExtracts.data.map((textExtract, i) => (
                                <div key={i} className='text-extract-item'>
                                    <div className='text-extract-image'>
                                        <img
                                            src={`${process.env.REACT_APP_API_URL_DEV}/${textExtract.imageFilePath}`}
                                            alt='Uploaded'
                                        />
                                    </div>
                                    <div className='text-extract-content'>
                                        <div dangerouslySetInnerHTML={{ __html: `<span><strong>Bold words/sentences:</strong> ${textExtract.boldWords}</span><br/><p style="margin-top: 20px;font-weight: bold;text-decoration: underline">Output:</p>` + (textExtract?.extractedText || '').replace(/\n/g, "<br/>") }}>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className='empty-recent-extracts'>
                            <div>
                                <h4>No recent extracts</h4>
                                <Link to='/text-extract'>Go to Text Extract</Link>
                            </div>
                        </div>
                    )
                )}
            </BoxLoader>
        </RecentExtractsStyles>
    )
}

export default RecentExtracts;