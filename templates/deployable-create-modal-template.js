const DeployableCreateModalTemplate = `
    <!-- MODAL / POST A DEPLOYMENT -->
    <div class="modal">
        <div class="modal-background" style="opacity: .8;"></div>
           <div class="modal-content">
               <div class="modal-card has-background-white">
                   <div class="modal-card-head">
                       <div class="modal-card-title">
                           Post a Deployment
                       </div>
                   </div>
                   <div class="modal-card-body">

                       <div class="field">
                           <div class="label">Name</div>
                           <input class="input" placeholder="Remix of Some Awesome Project" />
                       </div>

                       <div class="field">
                           <div class="label">License</div>
                           <select class="select is-disabled">
                               <option value="Creative Commons">Creative Commons 2.0</option>
                               <option value="MIT">MIT</option>
                           </select>
                       </div>

                       <div class="field">
                           <div class="label">Deployment Type</div>
                           <select class="select is-disabled">
                               <option value="AWS">AWS</option>
                               <option value="Jenkins">Jenkins</option>
                               <option value="Docker">Docker</option>
                               <option value="Other">Other</option>
                           </select>
                       </div>

                       <div class="field">
                           <div class="label">Github Project URL</div>
                           <input class="input" placeholder="Github Project URL" />
                       </div>
                       <div class="field">
                           <div class="label">Tags</div>
                           <input class="input" placeholder="Search for tags with #tag-name" />
                       </div>
                   </div>
                   <div class="modal-card-foot">
                       <button class="button is-warning">Cancel</button>
                       <button class="button is-info">Create Remix</button>
                   </div>
               </div>
           </div>
        </div>
`;

export { DeployableCreateModalTemplate };