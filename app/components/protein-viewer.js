import Component from '@glimmer/component';
// import { pv } from 'bio-pv';
import { tracked } from '@glimmer/tracking';

export default class ProteinViewerComponent extends Component {
  // override the default options with something less restrictive.
  // @tracked
  // options = {
  //   width: 600,
  //   height: 600,
  //   antialias: true,
  //   quality: 'medium'
  // };
  // @tracked viewer;
  // init() {
  //   this._super(...arguments);
  //   console.log("This is loading");
  //   console.log(pv);
  //   console.log(document.getElementById('viewer'));
  //   this.viewer = pv.Viewer(document.getElementById('viewer'), this.options);
  //   this.loadMethylTransferase();
  // }
  // loadMethylTransferase() {
  //   let viewer = this.viewer;
  //   // asynchronously load the PDB file for the dengue methyl transferase
  //   // from the server and display it in the viewer.
  //   pv.io.fetchPdb('/static/PDBs/1ao7.pdb', function(structure) {
  //     // display the protein as cartoon, coloring the secondary structure
  //     // elements in a rainbow gradient.
  //     viewer.cartoon('protein', structure, { color : color.ssSuccession() });
  //     viewer.centerOn(structure);
  //   });
  // }
  //
  // load the methyl transferase once the DOM has finished loading. That's
  // the earliest point the WebGL context is available.
  // document.addEventListener('DOMContentLoaded', loadMethylTransferase);
}
