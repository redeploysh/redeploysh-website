const DeployableCreateModalTemplate = `
    <div class="modal is-active">
       <div class="modal-background" style="opacity: .8;"></div>
       <div class="modal-content">
           <div class="modal-card has-background-white">
               <div class="modal-card-head">
                   <div class="modal-card-title">
                       Post a Deployment
                   </div>
               </div>
               <div class="modal-card-body">
                   <fields uuid="createdeployment" version="1" name="test" submitLabel="Create"></fields>
               </div>
           </div>
       </div>
    </div>
`;

export { DeployableCreateModalTemplate };