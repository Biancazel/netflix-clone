import { CheckIcon } from "@heroicons/react/24/solid";
import { DocumentData } from "firebase/firestore";

interface Props {
  products: DocumentData[];
  selectedPlan: DocumentData | null;
}

function Table({ products, selectedPlan }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          {products.map((product) => (
            <td
              key={product.name}
              className={`tableDataFeature ${
                selectedPlan?.name === product.name
                  ? "text-[#e50914]"
                  : "text-[gray]"
              }`}
            >
              {product.priceInfo?.unit_amount! / 100}€
            </td>
          ))}
        </tr>

        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          {products.map((product) => (
            <td
              key={product.name}
              className={`tableDataFeature ${
                selectedPlan?.name === product.name
                  ? "text-[#e50914]"
                  : "text-[gray]"
              }`}
            >
              {product.metadata.videoQuality}
            </td>
          ))}
        </tr>

        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((product) => (
            <td
              key={product.name}
              className={`tableDataFeature ${
                selectedPlan?.name === product.name
                  ? "text-[#e50914]"
                  : "text-[gray]"
              }`}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>

        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              key={product.name}
              className={`tableDataFeature ${
                selectedPlan?.name === product.name
                  ? "text-[#e50914]"
                  : "text-[gray]"
              }`}
            >
              {product.metadata.portability === "true" && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
