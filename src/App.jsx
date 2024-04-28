import "../style.css";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto ">
          <section className="section1 my-4">
            <div className="caption2 flex justify-between">
              <h2 className="font-semibold">भाग ३-उपचारको िथती</h2>
              <h2 className="font-semibold">पिहलो माा औषधी खाएको िमितः / /</h2>
            </div>
            <table className="table-fixed ">
              <thead>
                <tr>
                  <th rowSpan={2}>आर्थिक वर्ष</th>
                  <th colSpan={12}>मिहना−मिहनाको उपचार</th>
                  <th rowSpan={2}>घटाइएको िववरण र मि ित</th>
                </tr>
                <tr>
                  <th>श्रा.</th>
                  <th>भा. </th>
                  <th>आ.</th>
                  <th>का.</th>
                  <th>मं.</th>
                  <th>पू</th>
                  <th>मा.</th>
                  <th>फा.</th>
                  <th> चे.</th>
                  <th>बे.</th>
                  <th>जे. </th>
                  <th>आ.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[आर्थिक वर्ष1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[श्रा1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[भा1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[आ1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[का1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[मं1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[पू1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[मा1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[फा1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[चे1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[बे1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[जे1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[1आ1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[घटाइएको िववरण र िमित1]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[आर्थिक वर्ष2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[श्रा2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[भा2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[आ2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[का2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[मं2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[पू2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[मा2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[फा2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[चे2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[बे2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[जे2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[1आ2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[घटाइएको िववरण र िमित2]", {})}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[आर्थिक वर्ष3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[श्रा3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[भा3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[आ3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[का3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[मं3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[पू3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[मा3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[फा3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[चे3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[बे3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[जे3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[1आ3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("first[घटाइएको िववरण र िमित3]", {})}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="section1-footer bg-slate-100 p-4 m-2">
              <h3>
                घटाइएको िववरणः &nbsp; &nbsp; &nbsp; Release from Treatment
                (RFT), Transfer Out, Defaulter, Lost to follow-up, Others (Died,
                Wrong Diagnosis)
              </h3>
            </div>
          </section>
          <div className="bg-black border-black border-2 h-1 w-1/2 mb-8 mt-4 mr-[40rem]">
            <h2 className="font-semibold">
              भाग ४-कुरोगको ितिया यथापन / अय उपचार (Reaction during treatment)
            </h2>
          </div>
          <section className="section2">
            <table className="table-fixed ">
              <thead>
                <tr>
                  <th>मिति</th>
                  <th>चिन्ह तथा लक्षण</th>
                  <th>निदान</th>
                  <th>औषधी</th>
                  <th>मात्रा</th>
                  <th>उपचारको अवधि</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[मिति1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[चिन्ह तथा लक्षण1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[निदान1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[औषधी1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[मात्रा1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[उपचारको अवधि1]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[मिति2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[चिन्ह तथा लक्षण2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[निदान2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[औषधी2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[मात्रा2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[उपचारको अवधि2]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[मिति3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[चिन्ह तथा लक्षण3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[निदान3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[औषधी3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[मात्रा3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[उपचारको अवधि3]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[मिति4]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[चिन्ह तथा लक्षण4]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[निदान4]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[औषधी4]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[मात्रा4]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[उपचारको अवधि4]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[मिति5]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[चिन्ह तथा लक्षण5]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[निदान5]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[औषधी5]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[मात्रा5]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("second[उपचारको अवधि5]", {})}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* section  3 */}

          <div className=" h-1 w-1/2 mb-8 mt-8 mr-[40rem]">
            <h2 className="font-semibold">
              भाग ५-Medical and Social Rehabilitation
            </h2>
          </div>

          <section className="section3">
            <table className="table-fixed ">
              <thead>
                <tr>
                  <th>जीवनयापनको लागि सहयोग (छ भने चिन्ह लगाउनुहोस्)</th>
                  <th>
                    शिक्षा{" "}
                    <input type="checkbox" {...register("third[शिक्षा]", {})} />
                  </th>
                  <th>
                    स्वरोजगार{" "}
                    <input
                      type="checkbox"
                      {...register("third[स्वरोजगार]", {})}
                    />
                  </th>
                  <th>
                    घर मर्मत{" "}
                    <input
                      type="checkbox"
                      {...register("third[घर मर्मत]", {})}
                    />
                  </th>
                  <th>अन्य ......</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>सहयोग गरेको मिति</th>

                  <td>मिति</td>
                  <td>मिति</td>
                  <td>मिति</td>
                  <td>मिति</td>
                </tr>
                <tr>
                  <th>सहयोग गर्ने संस्था</th>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("third[सहयोग गर्ने संस्था1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("third[सहयोग गर्ने संस्था2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("third[सहयोग गर्ने संस्था3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("third[सहयोग गर्ने संस्था4]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="5"></td>
                </tr>
                <tr>
                  <td></td>
                  <td>मिति</td>
                  <td>मिति</td>
                  <td>मिति</td>
                  <td>मिति</td>
                </tr>
                <tr>
                  <th>स्वयं हेरचाह किट (Kit) सहयोग</th>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("third[स्वयं हेरचाह किट (Kit) सहयोग1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("third[स्वयं हेरचाह किट (Kit) सहयोग2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("third[स्वयं हेरचाह किट (Kit) सहयोग3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("third[स्वयं हेरचाह किट (Kit) सहयोग4]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <th>स्वयं हेरचाह सम्वन्धि तालिम</th>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("third[स्वयं हेरचाह सम्वन्धि तालिम1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("third[स्वयं हेरचाह सम्वन्धि तालिम2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("third[स्वयं हेरचाह सम्वन्धि तालिम3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("third[स्वयं हेरचाह सम्वन्धि तालिम4]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <th>जुत्ता आवश्यक (छ । छैन) छ भने वितरण मिति</th>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register(
                        "third[जुत्ता आवश्यक (छ । छैन) छ भने वितरण मिति1]",
                        {}
                      )}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register(
                        "third[जुत्ता आवश्यक (छ । छैन) छ भने वितरण मिति2]",
                        {}
                      )}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register(
                        "third[जुत्ता आवश्यक (छ । छैन) छ भने वितरण मिति3]",
                        {}
                      )}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register(
                        "third[जुत्ता आवश्यक (छ । छैन) छ भने वितरण मिति4]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr>
                  <th>सहयोग सामग्री आवश्यक (छ । छैन) छ भने वितरण मिति</th>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register(
                        "third[सहयोग सामग्री आवश्यक (छ । छैन) छ भने वितरण मिति1]",
                        {}
                      )}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register(
                        "third[सहयोग सामग्री आवश्यक (छ । छैन) छ भने वितरण मिति2]",
                        {}
                      )}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register(
                        "third[सहयोग सामग्री आवश्यक (छ । छैन) छ भने वितरण मिति3]",
                        {}
                      )}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register(
                        "third[सहयोग सामग्री आवश्यक (छ । छैन) छ भने वितरण मिति4]",
                        {}
                      )}
                    />
                  </td>
                </tr>
                <tr>
                  <th>सुधारात्मक शल्यक्रिया आवश्यक (छ/छैन) छ भनेः-</th>
                  <th colSpan={2}>शल्यक्रिया मिति (आँखा/हात/ गोडा)</th>
                  <th>शल्यक्रिया मिति (आँखा/हात/ गोडा</th>
                  <th>शल्यक्रिया मिति (आँखा/हात/ गोडा</th>
                </tr>
                <tr>
                  <td>
                    <table>
                      <thead>
                        <th colSpan={2}>आँखा</th>
                        <th colSpan={2}>हात </th>
                        <th colSpan={2}>गोडा</th>
                      </thead>
                      <tbody>
                        <tr>
                          <th>दायाँ</th>
                          <th>बायाँ</th>
                          <th>दायाँ</th>
                          <th>बायाँ</th>
                          <th>दायाँ</th>
                          <th>बायाँ</th>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              className="w-full h-full"
                              {...register(
                                "third[सुधारात्मक शल्यक्रिया आवश्यक (छ/छैन) छ भनेः आँखा दायाँ]",
                                {}
                              )}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="w-full h-full"
                              {...register(
                                "third[सुधारात्मक शल्यक्रिया आवश्यक (छ/छैन) छ भनेः आँखा बायाँ]",
                                {}
                              )}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="w-full h-full"
                              {...register(
                                "third[सुधारात्मक शल्यक्रिया आवश्यक (छ/छैन) छ भनेः हात दायाँ]",
                                {}
                              )}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="w-full h-full"
                              {...register(
                                "third[सुधारात्मक शल्यक्रिया आवश्यक (छ/छैन) छ भनेः हात  बायाँ]",
                                {}
                              )}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="w-full h-full"
                              {...register(
                                "third[सुधारात्मक शल्यक्रिया आवश्यक (छ/छैन) छ भनेः गोडा दायाँ]",
                                {}
                              )}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="w-full h-full"
                              {...register(
                                "third[सुधारात्मक शल्यक्रिया आवश्यक (छ/छैन) छ भनेः गोडा  बायाँ]",
                                {}
                              )}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td colSpan={2}>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register(
                        "third[शल्यक्रिया मिति (आँखा/हात/ गोडा)1]",
                        {}
                      )}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register(
                        "third[शल्यक्रिया मिति (आँखा/हात/ गोडा)2]",
                        {}
                      )}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register(
                        "third[शल्यक्रिया मिति (आँखा/हात/ गोडा)3]",
                        {}
                      )}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="section4 mt-8">
            <table className="table-fixed ">
              <thead>
                <tr>
                  <th colSpan={4}>भाग ६-विरामीको फलो अप (Follow-up)</th>
                </tr>
                <tr>
                  <th>मिति </th>
                  <th>विवरण </th>
                  <th>Clinical / Laboratory</th>
                  <th>दिइएको उपचार</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[मिति1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[विवरण1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[Clinical / Laboratory1]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[दिइएको उपचार1]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[मिति2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[विवरण2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[Clinical / Laboratory2]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[दिइएको उपचार2]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[मिति3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[विवरण3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[Clinical / Laboratory3]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[दिइएको उपचार3]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[मिति4]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[विवरण4]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[Clinical / Laboratory4]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[दिइएको उपचार4]", {})}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[मिति5]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[विवरण5]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[Clinical / Laboratory5]", {})}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full h-full"
                      {...register("fourth[दिइएको उपचार5]", {})}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
