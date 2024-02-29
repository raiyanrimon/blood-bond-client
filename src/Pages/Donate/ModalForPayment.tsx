import { useLocation } from "react-router-dom";
import StripeComponent from "./StripeComonent";

export default function ModalForPayment({
  campaignId,
}: {
  campaignId: string;
}) {
  const location = useLocation();
  const { pathname } = location; 

console.log(campaignId)

  return (
    <>
      <button
        className={`btn ${pathname.match(/^\/campaign\/\S+$/) && "hidden"}`}
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_5"
          ) as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        Donate
      </button>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <StripeComponent campaignId={campaignId} />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
