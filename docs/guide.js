/* Application preparation uses the existing browser-local family plan. */
const prepItems=[
 ['route','Correct club, pathway, age group and application route identified'],
 ['eligibility','Overseas eligibility questions prepared; held and pending citizenship distinguished'],
 ['cv','CV checked for accurate dates, competition context and working links'],
 ['reference','Referee has approved the reference and agreed to be contacted'],
 ['video','Video identifies the player and shows position-relevant match evidence'],
 ['fullmatch','Full-match footage and timestamps available if requested'],
 ['consent','Recording and sharing permissions checked'],
 ['access','Video and document links tested with appropriate reviewer access'],
 ['tailored','Enquiry tailored to this club; parent/guardian involved for under-18s'],
 ['privacy','Sensitive documents excluded from public materials and unsolicited attachments']
];
function renderPrepChecklist(){
 $('#prepChecklist').innerHTML=prepItems.map(([id,label])=>`<div class="check-row"><input type="checkbox" id="prep-${id}" data-prep="${id}" ${state.preparation[id]?'checked':''}><label for="prep-${id}">${label}</label></div>`).join('');
 $('#prepProgress').textContent=`${prepItems.filter(([id])=>state.preparation[id]).length} of ${prepItems.length} preparation steps complete`;
}
renderPrepChecklist();
$('#prepChecklist').addEventListener('change',e=>{if(e.target.dataset.prep){state.preparation[e.target.dataset.prep]=e.target.checked;persist();$('#prepProgress').textContent=`${prepItems.filter(([id])=>state.preparation[id]).length} of ${prepItems.length} preparation steps complete`;}});
document.querySelectorAll('[data-guide-jump]').forEach(b=>b.addEventListener('click',()=>{const section=document.getElementById(b.dataset.guideJump);section.focus({preventScroll:true});section.scrollIntoView({behavior:'smooth',block:'start'});}));
$('#printGuide').onclick=()=>{document.body.dataset.print='guide';window.print()};
window.addEventListener('afterprint',()=>delete document.body.dataset.print);
