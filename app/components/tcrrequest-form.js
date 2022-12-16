import Component from '@glimmer/component';
import { action } from '@ember/object';
import jQuery from 'jquery';
import { tracked } from '@glimmer/tracking';

export default class TcrrequestFormComponent extends Component {
  @tracked pdbname;
  @tracked action1 = "None";
  @tracked action2 = "None";
  @tracked action3 = "None";
  @tracked urlencodedpdbfile;
  @tracked fileURL_in;
  @action updatePDB(event) {
    this.pdbname = event.target.value;
  }
  @action updateValue1(event) {
    this.action1 = event.target.value;
  }
  @action updateValue2(event) {
    this.action2 = event.target.value;
  }
  @action updateValue3(event) {
    this.action3 = event.target.value;
  }
  @action
  tcrrequest() {
    console.log('Entered TCR Request');
    let formdata = {
      pdb: this.pdbname,
      action1: this.action1,
      action2: this.action2,
      action3: this.action3,
    };
    console.log(formdata);
    jQuery.post('/api/tcrrequest', formdata, function (response) {
      // let fileName = response.getResponseHeader('Content-Disposition');
      // console.log(fileName);
      // Collect pdb file encoded as URL
      let file = new Blob([response], { type: 'application/text' });
      let fileURL = window.URL.createObjectURL(file);
      // Serve file to user
      window.location = fileURL;
      jQuery.post('/api/fetchpdb', { pdb: this.fileURL_in }, function (response) {
          console.log(response);
          // component.urlencodedpdbfile = encodeURIComponent(response);
      });
    });
  }
}
