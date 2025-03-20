import { x as getDefaultExportFromCjs, r as reactExports, $ as $1CM7W$react, j as jsxRuntimeExports, P as Primitive, y as useComposedRefs, z as cn, B as Button, X, p as useToast, D as Loading, E as like, G as updateUserProfile, U as User, o as Input, H as Mail, J as Phone, q as Calendar, K as MapPin, N as fetchUserData } from './index-BxW4NEkE.js';
import { D as DashboardLayout } from './DashboardLayout-BYaHOMeS.js';
import { L as Label } from './label-CC7x5zSE.js';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from './select-DSKKSaz0.js';
import { D as DatePicker } from './DatePicker-BN7URmnc.js';
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from './card-B_2urvVV.js';
import { P as PropTypes } from './index-D1S_fTNv.js';
import { _ as __awaiter, a as __extends, b as __assign, u as useControllableState, D as Dialog, c as DialogContent, d as DialogFooter } from './dialog-3s5tW-4P.js';
import { c as clamp$1 } from './index-BfAAoDv6.js';
import { c as createContextScope, a as composeEventHandlers$1 } from './index-BZ7ugsel.js';
import { u as useDirection } from './index-xYyTdMn9.js';
import { u as usePrevious } from './index-BIORAGEQ.js';
import { u as useSize } from './index-DcBPRh-Z.js';
import { c as createCollection } from './index-o6t6yshc.js';
import { U as Upload } from './upload-C_PcKlH8.js';
import { P as Pencil } from './pencil-BnPazAKP.js';
import './users-DfEX5jUe.js';
import './chevron-up-wBRuSHft.js';
import './calendar-D-7oRoOI.js';
import './format-CqEybc0i.js';
import './chevron-right-xZVHym6g.js';

const COMMON_MIME_TYPES = new Map([
    // https://github.com/guzzle/psr7/blob/2d9260799e713f1c475d3c5fdc3d6561ff7441b2/src/MimeType.php
    ['1km', 'application/vnd.1000minds.decision-model+xml'],
    ['3dml', 'text/vnd.in3d.3dml'],
    ['3ds', 'image/x-3ds'],
    ['3g2', 'video/3gpp2'],
    ['3gp', 'video/3gp'],
    ['3gpp', 'video/3gpp'],
    ['3mf', 'model/3mf'],
    ['7z', 'application/x-7z-compressed'],
    ['7zip', 'application/x-7z-compressed'],
    ['123', 'application/vnd.lotus-1-2-3'],
    ['aab', 'application/x-authorware-bin'],
    ['aac', 'audio/x-acc'],
    ['aam', 'application/x-authorware-map'],
    ['aas', 'application/x-authorware-seg'],
    ['abw', 'application/x-abiword'],
    ['ac', 'application/vnd.nokia.n-gage.ac+xml'],
    ['ac3', 'audio/ac3'],
    ['acc', 'application/vnd.americandynamics.acc'],
    ['ace', 'application/x-ace-compressed'],
    ['acu', 'application/vnd.acucobol'],
    ['acutc', 'application/vnd.acucorp'],
    ['adp', 'audio/adpcm'],
    ['aep', 'application/vnd.audiograph'],
    ['afm', 'application/x-font-type1'],
    ['afp', 'application/vnd.ibm.modcap'],
    ['ahead', 'application/vnd.ahead.space'],
    ['ai', 'application/pdf'],
    ['aif', 'audio/x-aiff'],
    ['aifc', 'audio/x-aiff'],
    ['aiff', 'audio/x-aiff'],
    ['air', 'application/vnd.adobe.air-application-installer-package+zip'],
    ['ait', 'application/vnd.dvb.ait'],
    ['ami', 'application/vnd.amiga.ami'],
    ['amr', 'audio/amr'],
    ['apk', 'application/vnd.android.package-archive'],
    ['apng', 'image/apng'],
    ['appcache', 'text/cache-manifest'],
    ['application', 'application/x-ms-application'],
    ['apr', 'application/vnd.lotus-approach'],
    ['arc', 'application/x-freearc'],
    ['arj', 'application/x-arj'],
    ['asc', 'application/pgp-signature'],
    ['asf', 'video/x-ms-asf'],
    ['asm', 'text/x-asm'],
    ['aso', 'application/vnd.accpac.simply.aso'],
    ['asx', 'video/x-ms-asf'],
    ['atc', 'application/vnd.acucorp'],
    ['atom', 'application/atom+xml'],
    ['atomcat', 'application/atomcat+xml'],
    ['atomdeleted', 'application/atomdeleted+xml'],
    ['atomsvc', 'application/atomsvc+xml'],
    ['atx', 'application/vnd.antix.game-component'],
    ['au', 'audio/x-au'],
    ['avi', 'video/x-msvideo'],
    ['avif', 'image/avif'],
    ['aw', 'application/applixware'],
    ['azf', 'application/vnd.airzip.filesecure.azf'],
    ['azs', 'application/vnd.airzip.filesecure.azs'],
    ['azv', 'image/vnd.airzip.accelerator.azv'],
    ['azw', 'application/vnd.amazon.ebook'],
    ['b16', 'image/vnd.pco.b16'],
    ['bat', 'application/x-msdownload'],
    ['bcpio', 'application/x-bcpio'],
    ['bdf', 'application/x-font-bdf'],
    ['bdm', 'application/vnd.syncml.dm+wbxml'],
    ['bdoc', 'application/x-bdoc'],
    ['bed', 'application/vnd.realvnc.bed'],
    ['bh2', 'application/vnd.fujitsu.oasysprs'],
    ['bin', 'application/octet-stream'],
    ['blb', 'application/x-blorb'],
    ['blorb', 'application/x-blorb'],
    ['bmi', 'application/vnd.bmi'],
    ['bmml', 'application/vnd.balsamiq.bmml+xml'],
    ['bmp', 'image/bmp'],
    ['book', 'application/vnd.framemaker'],
    ['box', 'application/vnd.previewsystems.box'],
    ['boz', 'application/x-bzip2'],
    ['bpk', 'application/octet-stream'],
    ['bpmn', 'application/octet-stream'],
    ['bsp', 'model/vnd.valve.source.compiled-map'],
    ['btif', 'image/prs.btif'],
    ['buffer', 'application/octet-stream'],
    ['bz', 'application/x-bzip'],
    ['bz2', 'application/x-bzip2'],
    ['c', 'text/x-c'],
    ['c4d', 'application/vnd.clonk.c4group'],
    ['c4f', 'application/vnd.clonk.c4group'],
    ['c4g', 'application/vnd.clonk.c4group'],
    ['c4p', 'application/vnd.clonk.c4group'],
    ['c4u', 'application/vnd.clonk.c4group'],
    ['c11amc', 'application/vnd.cluetrust.cartomobile-config'],
    ['c11amz', 'application/vnd.cluetrust.cartomobile-config-pkg'],
    ['cab', 'application/vnd.ms-cab-compressed'],
    ['caf', 'audio/x-caf'],
    ['cap', 'application/vnd.tcpdump.pcap'],
    ['car', 'application/vnd.curl.car'],
    ['cat', 'application/vnd.ms-pki.seccat'],
    ['cb7', 'application/x-cbr'],
    ['cba', 'application/x-cbr'],
    ['cbr', 'application/x-cbr'],
    ['cbt', 'application/x-cbr'],
    ['cbz', 'application/x-cbr'],
    ['cc', 'text/x-c'],
    ['cco', 'application/x-cocoa'],
    ['cct', 'application/x-director'],
    ['ccxml', 'application/ccxml+xml'],
    ['cdbcmsg', 'application/vnd.contact.cmsg'],
    ['cda', 'application/x-cdf'],
    ['cdf', 'application/x-netcdf'],
    ['cdfx', 'application/cdfx+xml'],
    ['cdkey', 'application/vnd.mediastation.cdkey'],
    ['cdmia', 'application/cdmi-capability'],
    ['cdmic', 'application/cdmi-container'],
    ['cdmid', 'application/cdmi-domain'],
    ['cdmio', 'application/cdmi-object'],
    ['cdmiq', 'application/cdmi-queue'],
    ['cdr', 'application/cdr'],
    ['cdx', 'chemical/x-cdx'],
    ['cdxml', 'application/vnd.chemdraw+xml'],
    ['cdy', 'application/vnd.cinderella'],
    ['cer', 'application/pkix-cert'],
    ['cfs', 'application/x-cfs-compressed'],
    ['cgm', 'image/cgm'],
    ['chat', 'application/x-chat'],
    ['chm', 'application/vnd.ms-htmlhelp'],
    ['chrt', 'application/vnd.kde.kchart'],
    ['cif', 'chemical/x-cif'],
    ['cii', 'application/vnd.anser-web-certificate-issue-initiation'],
    ['cil', 'application/vnd.ms-artgalry'],
    ['cjs', 'application/node'],
    ['cla', 'application/vnd.claymore'],
    ['class', 'application/octet-stream'],
    ['clkk', 'application/vnd.crick.clicker.keyboard'],
    ['clkp', 'application/vnd.crick.clicker.palette'],
    ['clkt', 'application/vnd.crick.clicker.template'],
    ['clkw', 'application/vnd.crick.clicker.wordbank'],
    ['clkx', 'application/vnd.crick.clicker'],
    ['clp', 'application/x-msclip'],
    ['cmc', 'application/vnd.cosmocaller'],
    ['cmdf', 'chemical/x-cmdf'],
    ['cml', 'chemical/x-cml'],
    ['cmp', 'application/vnd.yellowriver-custom-menu'],
    ['cmx', 'image/x-cmx'],
    ['cod', 'application/vnd.rim.cod'],
    ['coffee', 'text/coffeescript'],
    ['com', 'application/x-msdownload'],
    ['conf', 'text/plain'],
    ['cpio', 'application/x-cpio'],
    ['cpp', 'text/x-c'],
    ['cpt', 'application/mac-compactpro'],
    ['crd', 'application/x-mscardfile'],
    ['crl', 'application/pkix-crl'],
    ['crt', 'application/x-x509-ca-cert'],
    ['crx', 'application/x-chrome-extension'],
    ['cryptonote', 'application/vnd.rig.cryptonote'],
    ['csh', 'application/x-csh'],
    ['csl', 'application/vnd.citationstyles.style+xml'],
    ['csml', 'chemical/x-csml'],
    ['csp', 'application/vnd.commonspace'],
    ['csr', 'application/octet-stream'],
    ['css', 'text/css'],
    ['cst', 'application/x-director'],
    ['csv', 'text/csv'],
    ['cu', 'application/cu-seeme'],
    ['curl', 'text/vnd.curl'],
    ['cww', 'application/prs.cww'],
    ['cxt', 'application/x-director'],
    ['cxx', 'text/x-c'],
    ['dae', 'model/vnd.collada+xml'],
    ['daf', 'application/vnd.mobius.daf'],
    ['dart', 'application/vnd.dart'],
    ['dataless', 'application/vnd.fdsn.seed'],
    ['davmount', 'application/davmount+xml'],
    ['dbf', 'application/vnd.dbf'],
    ['dbk', 'application/docbook+xml'],
    ['dcr', 'application/x-director'],
    ['dcurl', 'text/vnd.curl.dcurl'],
    ['dd2', 'application/vnd.oma.dd2+xml'],
    ['ddd', 'application/vnd.fujixerox.ddd'],
    ['ddf', 'application/vnd.syncml.dmddf+xml'],
    ['dds', 'image/vnd.ms-dds'],
    ['deb', 'application/x-debian-package'],
    ['def', 'text/plain'],
    ['deploy', 'application/octet-stream'],
    ['der', 'application/x-x509-ca-cert'],
    ['dfac', 'application/vnd.dreamfactory'],
    ['dgc', 'application/x-dgc-compressed'],
    ['dic', 'text/x-c'],
    ['dir', 'application/x-director'],
    ['dis', 'application/vnd.mobius.dis'],
    ['disposition-notification', 'message/disposition-notification'],
    ['dist', 'application/octet-stream'],
    ['distz', 'application/octet-stream'],
    ['djv', 'image/vnd.djvu'],
    ['djvu', 'image/vnd.djvu'],
    ['dll', 'application/octet-stream'],
    ['dmg', 'application/x-apple-diskimage'],
    ['dmn', 'application/octet-stream'],
    ['dmp', 'application/vnd.tcpdump.pcap'],
    ['dms', 'application/octet-stream'],
    ['dna', 'application/vnd.dna'],
    ['doc', 'application/msword'],
    ['docm', 'application/vnd.ms-word.template.macroEnabled.12'],
    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    ['dot', 'application/msword'],
    ['dotm', 'application/vnd.ms-word.template.macroEnabled.12'],
    ['dotx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template'],
    ['dp', 'application/vnd.osgi.dp'],
    ['dpg', 'application/vnd.dpgraph'],
    ['dra', 'audio/vnd.dra'],
    ['drle', 'image/dicom-rle'],
    ['dsc', 'text/prs.lines.tag'],
    ['dssc', 'application/dssc+der'],
    ['dtb', 'application/x-dtbook+xml'],
    ['dtd', 'application/xml-dtd'],
    ['dts', 'audio/vnd.dts'],
    ['dtshd', 'audio/vnd.dts.hd'],
    ['dump', 'application/octet-stream'],
    ['dvb', 'video/vnd.dvb.file'],
    ['dvi', 'application/x-dvi'],
    ['dwd', 'application/atsc-dwd+xml'],
    ['dwf', 'model/vnd.dwf'],
    ['dwg', 'image/vnd.dwg'],
    ['dxf', 'image/vnd.dxf'],
    ['dxp', 'application/vnd.spotfire.dxp'],
    ['dxr', 'application/x-director'],
    ['ear', 'application/java-archive'],
    ['ecelp4800', 'audio/vnd.nuera.ecelp4800'],
    ['ecelp7470', 'audio/vnd.nuera.ecelp7470'],
    ['ecelp9600', 'audio/vnd.nuera.ecelp9600'],
    ['ecma', 'application/ecmascript'],
    ['edm', 'application/vnd.novadigm.edm'],
    ['edx', 'application/vnd.novadigm.edx'],
    ['efif', 'application/vnd.picsel'],
    ['ei6', 'application/vnd.pg.osasli'],
    ['elc', 'application/octet-stream'],
    ['emf', 'image/emf'],
    ['eml', 'message/rfc822'],
    ['emma', 'application/emma+xml'],
    ['emotionml', 'application/emotionml+xml'],
    ['emz', 'application/x-msmetafile'],
    ['eol', 'audio/vnd.digital-winds'],
    ['eot', 'application/vnd.ms-fontobject'],
    ['eps', 'application/postscript'],
    ['epub', 'application/epub+zip'],
    ['es', 'application/ecmascript'],
    ['es3', 'application/vnd.eszigno3+xml'],
    ['esa', 'application/vnd.osgi.subsystem'],
    ['esf', 'application/vnd.epson.esf'],
    ['et3', 'application/vnd.eszigno3+xml'],
    ['etx', 'text/x-setext'],
    ['eva', 'application/x-eva'],
    ['evy', 'application/x-envoy'],
    ['exe', 'application/octet-stream'],
    ['exi', 'application/exi'],
    ['exp', 'application/express'],
    ['exr', 'image/aces'],
    ['ext', 'application/vnd.novadigm.ext'],
    ['ez', 'application/andrew-inset'],
    ['ez2', 'application/vnd.ezpix-album'],
    ['ez3', 'application/vnd.ezpix-package'],
    ['f', 'text/x-fortran'],
    ['f4v', 'video/mp4'],
    ['f77', 'text/x-fortran'],
    ['f90', 'text/x-fortran'],
    ['fbs', 'image/vnd.fastbidsheet'],
    ['fcdt', 'application/vnd.adobe.formscentral.fcdt'],
    ['fcs', 'application/vnd.isac.fcs'],
    ['fdf', 'application/vnd.fdf'],
    ['fdt', 'application/fdt+xml'],
    ['fe_launch', 'application/vnd.denovo.fcselayout-link'],
    ['fg5', 'application/vnd.fujitsu.oasysgp'],
    ['fgd', 'application/x-director'],
    ['fh', 'image/x-freehand'],
    ['fh4', 'image/x-freehand'],
    ['fh5', 'image/x-freehand'],
    ['fh7', 'image/x-freehand'],
    ['fhc', 'image/x-freehand'],
    ['fig', 'application/x-xfig'],
    ['fits', 'image/fits'],
    ['flac', 'audio/x-flac'],
    ['fli', 'video/x-fli'],
    ['flo', 'application/vnd.micrografx.flo'],
    ['flv', 'video/x-flv'],
    ['flw', 'application/vnd.kde.kivio'],
    ['flx', 'text/vnd.fmi.flexstor'],
    ['fly', 'text/vnd.fly'],
    ['fm', 'application/vnd.framemaker'],
    ['fnc', 'application/vnd.frogans.fnc'],
    ['fo', 'application/vnd.software602.filler.form+xml'],
    ['for', 'text/x-fortran'],
    ['fpx', 'image/vnd.fpx'],
    ['frame', 'application/vnd.framemaker'],
    ['fsc', 'application/vnd.fsc.weblaunch'],
    ['fst', 'image/vnd.fst'],
    ['ftc', 'application/vnd.fluxtime.clip'],
    ['fti', 'application/vnd.anser-web-funds-transfer-initiation'],
    ['fvt', 'video/vnd.fvt'],
    ['fxp', 'application/vnd.adobe.fxp'],
    ['fxpl', 'application/vnd.adobe.fxp'],
    ['fzs', 'application/vnd.fuzzysheet'],
    ['g2w', 'application/vnd.geoplan'],
    ['g3', 'image/g3fax'],
    ['g3w', 'application/vnd.geospace'],
    ['gac', 'application/vnd.groove-account'],
    ['gam', 'application/x-tads'],
    ['gbr', 'application/rpki-ghostbusters'],
    ['gca', 'application/x-gca-compressed'],
    ['gdl', 'model/vnd.gdl'],
    ['gdoc', 'application/vnd.google-apps.document'],
    ['geo', 'application/vnd.dynageo'],
    ['geojson', 'application/geo+json'],
    ['gex', 'application/vnd.geometry-explorer'],
    ['ggb', 'application/vnd.geogebra.file'],
    ['ggt', 'application/vnd.geogebra.tool'],
    ['ghf', 'application/vnd.groove-help'],
    ['gif', 'image/gif'],
    ['gim', 'application/vnd.groove-identity-message'],
    ['glb', 'model/gltf-binary'],
    ['gltf', 'model/gltf+json'],
    ['gml', 'application/gml+xml'],
    ['gmx', 'application/vnd.gmx'],
    ['gnumeric', 'application/x-gnumeric'],
    ['gpg', 'application/gpg-keys'],
    ['gph', 'application/vnd.flographit'],
    ['gpx', 'application/gpx+xml'],
    ['gqf', 'application/vnd.grafeq'],
    ['gqs', 'application/vnd.grafeq'],
    ['gram', 'application/srgs'],
    ['gramps', 'application/x-gramps-xml'],
    ['gre', 'application/vnd.geometry-explorer'],
    ['grv', 'application/vnd.groove-injector'],
    ['grxml', 'application/srgs+xml'],
    ['gsf', 'application/x-font-ghostscript'],
    ['gsheet', 'application/vnd.google-apps.spreadsheet'],
    ['gslides', 'application/vnd.google-apps.presentation'],
    ['gtar', 'application/x-gtar'],
    ['gtm', 'application/vnd.groove-tool-message'],
    ['gtw', 'model/vnd.gtw'],
    ['gv', 'text/vnd.graphviz'],
    ['gxf', 'application/gxf'],
    ['gxt', 'application/vnd.geonext'],
    ['gz', 'application/gzip'],
    ['gzip', 'application/gzip'],
    ['h', 'text/x-c'],
    ['h261', 'video/h261'],
    ['h263', 'video/h263'],
    ['h264', 'video/h264'],
    ['hal', 'application/vnd.hal+xml'],
    ['hbci', 'application/vnd.hbci'],
    ['hbs', 'text/x-handlebars-template'],
    ['hdd', 'application/x-virtualbox-hdd'],
    ['hdf', 'application/x-hdf'],
    ['heic', 'image/heic'],
    ['heics', 'image/heic-sequence'],
    ['heif', 'image/heif'],
    ['heifs', 'image/heif-sequence'],
    ['hej2', 'image/hej2k'],
    ['held', 'application/atsc-held+xml'],
    ['hh', 'text/x-c'],
    ['hjson', 'application/hjson'],
    ['hlp', 'application/winhlp'],
    ['hpgl', 'application/vnd.hp-hpgl'],
    ['hpid', 'application/vnd.hp-hpid'],
    ['hps', 'application/vnd.hp-hps'],
    ['hqx', 'application/mac-binhex40'],
    ['hsj2', 'image/hsj2'],
    ['htc', 'text/x-component'],
    ['htke', 'application/vnd.kenameaapp'],
    ['htm', 'text/html'],
    ['html', 'text/html'],
    ['hvd', 'application/vnd.yamaha.hv-dic'],
    ['hvp', 'application/vnd.yamaha.hv-voice'],
    ['hvs', 'application/vnd.yamaha.hv-script'],
    ['i2g', 'application/vnd.intergeo'],
    ['icc', 'application/vnd.iccprofile'],
    ['ice', 'x-conference/x-cooltalk'],
    ['icm', 'application/vnd.iccprofile'],
    ['ico', 'image/x-icon'],
    ['ics', 'text/calendar'],
    ['ief', 'image/ief'],
    ['ifb', 'text/calendar'],
    ['ifm', 'application/vnd.shana.informed.formdata'],
    ['iges', 'model/iges'],
    ['igl', 'application/vnd.igloader'],
    ['igm', 'application/vnd.insors.igm'],
    ['igs', 'model/iges'],
    ['igx', 'application/vnd.micrografx.igx'],
    ['iif', 'application/vnd.shana.informed.interchange'],
    ['img', 'application/octet-stream'],
    ['imp', 'application/vnd.accpac.simply.imp'],
    ['ims', 'application/vnd.ms-ims'],
    ['in', 'text/plain'],
    ['ini', 'text/plain'],
    ['ink', 'application/inkml+xml'],
    ['inkml', 'application/inkml+xml'],
    ['install', 'application/x-install-instructions'],
    ['iota', 'application/vnd.astraea-software.iota'],
    ['ipfix', 'application/ipfix'],
    ['ipk', 'application/vnd.shana.informed.package'],
    ['irm', 'application/vnd.ibm.rights-management'],
    ['irp', 'application/vnd.irepository.package+xml'],
    ['iso', 'application/x-iso9660-image'],
    ['itp', 'application/vnd.shana.informed.formtemplate'],
    ['its', 'application/its+xml'],
    ['ivp', 'application/vnd.immervision-ivp'],
    ['ivu', 'application/vnd.immervision-ivu'],
    ['jad', 'text/vnd.sun.j2me.app-descriptor'],
    ['jade', 'text/jade'],
    ['jam', 'application/vnd.jam'],
    ['jar', 'application/java-archive'],
    ['jardiff', 'application/x-java-archive-diff'],
    ['java', 'text/x-java-source'],
    ['jhc', 'image/jphc'],
    ['jisp', 'application/vnd.jisp'],
    ['jls', 'image/jls'],
    ['jlt', 'application/vnd.hp-jlyt'],
    ['jng', 'image/x-jng'],
    ['jnlp', 'application/x-java-jnlp-file'],
    ['joda', 'application/vnd.joost.joda-archive'],
    ['jp2', 'image/jp2'],
    ['jpe', 'image/jpeg'],
    ['jpeg', 'image/jpeg'],
    ['jpf', 'image/jpx'],
    ['jpg', 'image/jpeg'],
    ['jpg2', 'image/jp2'],
    ['jpgm', 'video/jpm'],
    ['jpgv', 'video/jpeg'],
    ['jph', 'image/jph'],
    ['jpm', 'video/jpm'],
    ['jpx', 'image/jpx'],
    ['js', 'application/javascript'],
    ['json', 'application/json'],
    ['json5', 'application/json5'],
    ['jsonld', 'application/ld+json'],
    // https://jsonlines.org/
    ['jsonl', 'application/jsonl'],
    ['jsonml', 'application/jsonml+json'],
    ['jsx', 'text/jsx'],
    ['jxr', 'image/jxr'],
    ['jxra', 'image/jxra'],
    ['jxrs', 'image/jxrs'],
    ['jxs', 'image/jxs'],
    ['jxsc', 'image/jxsc'],
    ['jxsi', 'image/jxsi'],
    ['jxss', 'image/jxss'],
    ['kar', 'audio/midi'],
    ['karbon', 'application/vnd.kde.karbon'],
    ['kdb', 'application/octet-stream'],
    ['kdbx', 'application/x-keepass2'],
    ['key', 'application/x-iwork-keynote-sffkey'],
    ['kfo', 'application/vnd.kde.kformula'],
    ['kia', 'application/vnd.kidspiration'],
    ['kml', 'application/vnd.google-earth.kml+xml'],
    ['kmz', 'application/vnd.google-earth.kmz'],
    ['kne', 'application/vnd.kinar'],
    ['knp', 'application/vnd.kinar'],
    ['kon', 'application/vnd.kde.kontour'],
    ['kpr', 'application/vnd.kde.kpresenter'],
    ['kpt', 'application/vnd.kde.kpresenter'],
    ['kpxx', 'application/vnd.ds-keypoint'],
    ['ksp', 'application/vnd.kde.kspread'],
    ['ktr', 'application/vnd.kahootz'],
    ['ktx', 'image/ktx'],
    ['ktx2', 'image/ktx2'],
    ['ktz', 'application/vnd.kahootz'],
    ['kwd', 'application/vnd.kde.kword'],
    ['kwt', 'application/vnd.kde.kword'],
    ['lasxml', 'application/vnd.las.las+xml'],
    ['latex', 'application/x-latex'],
    ['lbd', 'application/vnd.llamagraphics.life-balance.desktop'],
    ['lbe', 'application/vnd.llamagraphics.life-balance.exchange+xml'],
    ['les', 'application/vnd.hhe.lesson-player'],
    ['less', 'text/less'],
    ['lgr', 'application/lgr+xml'],
    ['lha', 'application/octet-stream'],
    ['link66', 'application/vnd.route66.link66+xml'],
    ['list', 'text/plain'],
    ['list3820', 'application/vnd.ibm.modcap'],
    ['listafp', 'application/vnd.ibm.modcap'],
    ['litcoffee', 'text/coffeescript'],
    ['lnk', 'application/x-ms-shortcut'],
    ['log', 'text/plain'],
    ['lostxml', 'application/lost+xml'],
    ['lrf', 'application/octet-stream'],
    ['lrm', 'application/vnd.ms-lrm'],
    ['ltf', 'application/vnd.frogans.ltf'],
    ['lua', 'text/x-lua'],
    ['luac', 'application/x-lua-bytecode'],
    ['lvp', 'audio/vnd.lucent.voice'],
    ['lwp', 'application/vnd.lotus-wordpro'],
    ['lzh', 'application/octet-stream'],
    ['m1v', 'video/mpeg'],
    ['m2a', 'audio/mpeg'],
    ['m2v', 'video/mpeg'],
    ['m3a', 'audio/mpeg'],
    ['m3u', 'text/plain'],
    ['m3u8', 'application/vnd.apple.mpegurl'],
    ['m4a', 'audio/x-m4a'],
    ['m4p', 'application/mp4'],
    ['m4s', 'video/iso.segment'],
    ['m4u', 'application/vnd.mpegurl'],
    ['m4v', 'video/x-m4v'],
    ['m13', 'application/x-msmediaview'],
    ['m14', 'application/x-msmediaview'],
    ['m21', 'application/mp21'],
    ['ma', 'application/mathematica'],
    ['mads', 'application/mads+xml'],
    ['maei', 'application/mmt-aei+xml'],
    ['mag', 'application/vnd.ecowin.chart'],
    ['maker', 'application/vnd.framemaker'],
    ['man', 'text/troff'],
    ['manifest', 'text/cache-manifest'],
    ['map', 'application/json'],
    ['mar', 'application/octet-stream'],
    ['markdown', 'text/markdown'],
    ['mathml', 'application/mathml+xml'],
    ['mb', 'application/mathematica'],
    ['mbk', 'application/vnd.mobius.mbk'],
    ['mbox', 'application/mbox'],
    ['mc1', 'application/vnd.medcalcdata'],
    ['mcd', 'application/vnd.mcd'],
    ['mcurl', 'text/vnd.curl.mcurl'],
    ['md', 'text/markdown'],
    ['mdb', 'application/x-msaccess'],
    ['mdi', 'image/vnd.ms-modi'],
    ['mdx', 'text/mdx'],
    ['me', 'text/troff'],
    ['mesh', 'model/mesh'],
    ['meta4', 'application/metalink4+xml'],
    ['metalink', 'application/metalink+xml'],
    ['mets', 'application/mets+xml'],
    ['mfm', 'application/vnd.mfmp'],
    ['mft', 'application/rpki-manifest'],
    ['mgp', 'application/vnd.osgeo.mapguide.package'],
    ['mgz', 'application/vnd.proteus.magazine'],
    ['mid', 'audio/midi'],
    ['midi', 'audio/midi'],
    ['mie', 'application/x-mie'],
    ['mif', 'application/vnd.mif'],
    ['mime', 'message/rfc822'],
    ['mj2', 'video/mj2'],
    ['mjp2', 'video/mj2'],
    ['mjs', 'application/javascript'],
    ['mk3d', 'video/x-matroska'],
    ['mka', 'audio/x-matroska'],
    ['mkd', 'text/x-markdown'],
    ['mks', 'video/x-matroska'],
    ['mkv', 'video/x-matroska'],
    ['mlp', 'application/vnd.dolby.mlp'],
    ['mmd', 'application/vnd.chipnuts.karaoke-mmd'],
    ['mmf', 'application/vnd.smaf'],
    ['mml', 'text/mathml'],
    ['mmr', 'image/vnd.fujixerox.edmics-mmr'],
    ['mng', 'video/x-mng'],
    ['mny', 'application/x-msmoney'],
    ['mobi', 'application/x-mobipocket-ebook'],
    ['mods', 'application/mods+xml'],
    ['mov', 'video/quicktime'],
    ['movie', 'video/x-sgi-movie'],
    ['mp2', 'audio/mpeg'],
    ['mp2a', 'audio/mpeg'],
    ['mp3', 'audio/mpeg'],
    ['mp4', 'video/mp4'],
    ['mp4a', 'audio/mp4'],
    ['mp4s', 'application/mp4'],
    ['mp4v', 'video/mp4'],
    ['mp21', 'application/mp21'],
    ['mpc', 'application/vnd.mophun.certificate'],
    ['mpd', 'application/dash+xml'],
    ['mpe', 'video/mpeg'],
    ['mpeg', 'video/mpeg'],
    ['mpg', 'video/mpeg'],
    ['mpg4', 'video/mp4'],
    ['mpga', 'audio/mpeg'],
    ['mpkg', 'application/vnd.apple.installer+xml'],
    ['mpm', 'application/vnd.blueice.multipass'],
    ['mpn', 'application/vnd.mophun.application'],
    ['mpp', 'application/vnd.ms-project'],
    ['mpt', 'application/vnd.ms-project'],
    ['mpy', 'application/vnd.ibm.minipay'],
    ['mqy', 'application/vnd.mobius.mqy'],
    ['mrc', 'application/marc'],
    ['mrcx', 'application/marcxml+xml'],
    ['ms', 'text/troff'],
    ['mscml', 'application/mediaservercontrol+xml'],
    ['mseed', 'application/vnd.fdsn.mseed'],
    ['mseq', 'application/vnd.mseq'],
    ['msf', 'application/vnd.epson.msf'],
    ['msg', 'application/vnd.ms-outlook'],
    ['msh', 'model/mesh'],
    ['msi', 'application/x-msdownload'],
    ['msl', 'application/vnd.mobius.msl'],
    ['msm', 'application/octet-stream'],
    ['msp', 'application/octet-stream'],
    ['msty', 'application/vnd.muvee.style'],
    ['mtl', 'model/mtl'],
    ['mts', 'model/vnd.mts'],
    ['mus', 'application/vnd.musician'],
    ['musd', 'application/mmt-usd+xml'],
    ['musicxml', 'application/vnd.recordare.musicxml+xml'],
    ['mvb', 'application/x-msmediaview'],
    ['mvt', 'application/vnd.mapbox-vector-tile'],
    ['mwf', 'application/vnd.mfer'],
    ['mxf', 'application/mxf'],
    ['mxl', 'application/vnd.recordare.musicxml'],
    ['mxmf', 'audio/mobile-xmf'],
    ['mxml', 'application/xv+xml'],
    ['mxs', 'application/vnd.triscape.mxs'],
    ['mxu', 'video/vnd.mpegurl'],
    ['n-gage', 'application/vnd.nokia.n-gage.symbian.install'],
    ['n3', 'text/n3'],
    ['nb', 'application/mathematica'],
    ['nbp', 'application/vnd.wolfram.player'],
    ['nc', 'application/x-netcdf'],
    ['ncx', 'application/x-dtbncx+xml'],
    ['nfo', 'text/x-nfo'],
    ['ngdat', 'application/vnd.nokia.n-gage.data'],
    ['nitf', 'application/vnd.nitf'],
    ['nlu', 'application/vnd.neurolanguage.nlu'],
    ['nml', 'application/vnd.enliven'],
    ['nnd', 'application/vnd.noblenet-directory'],
    ['nns', 'application/vnd.noblenet-sealer'],
    ['nnw', 'application/vnd.noblenet-web'],
    ['npx', 'image/vnd.net-fpx'],
    ['nq', 'application/n-quads'],
    ['nsc', 'application/x-conference'],
    ['nsf', 'application/vnd.lotus-notes'],
    ['nt', 'application/n-triples'],
    ['ntf', 'application/vnd.nitf'],
    ['numbers', 'application/x-iwork-numbers-sffnumbers'],
    ['nzb', 'application/x-nzb'],
    ['oa2', 'application/vnd.fujitsu.oasys2'],
    ['oa3', 'application/vnd.fujitsu.oasys3'],
    ['oas', 'application/vnd.fujitsu.oasys'],
    ['obd', 'application/x-msbinder'],
    ['obgx', 'application/vnd.openblox.game+xml'],
    ['obj', 'model/obj'],
    ['oda', 'application/oda'],
    ['odb', 'application/vnd.oasis.opendocument.database'],
    ['odc', 'application/vnd.oasis.opendocument.chart'],
    ['odf', 'application/vnd.oasis.opendocument.formula'],
    ['odft', 'application/vnd.oasis.opendocument.formula-template'],
    ['odg', 'application/vnd.oasis.opendocument.graphics'],
    ['odi', 'application/vnd.oasis.opendocument.image'],
    ['odm', 'application/vnd.oasis.opendocument.text-master'],
    ['odp', 'application/vnd.oasis.opendocument.presentation'],
    ['ods', 'application/vnd.oasis.opendocument.spreadsheet'],
    ['odt', 'application/vnd.oasis.opendocument.text'],
    ['oga', 'audio/ogg'],
    ['ogex', 'model/vnd.opengex'],
    ['ogg', 'audio/ogg'],
    ['ogv', 'video/ogg'],
    ['ogx', 'application/ogg'],
    ['omdoc', 'application/omdoc+xml'],
    ['onepkg', 'application/onenote'],
    ['onetmp', 'application/onenote'],
    ['onetoc', 'application/onenote'],
    ['onetoc2', 'application/onenote'],
    ['opf', 'application/oebps-package+xml'],
    ['opml', 'text/x-opml'],
    ['oprc', 'application/vnd.palm'],
    ['opus', 'audio/ogg'],
    ['org', 'text/x-org'],
    ['osf', 'application/vnd.yamaha.openscoreformat'],
    ['osfpvg', 'application/vnd.yamaha.openscoreformat.osfpvg+xml'],
    ['osm', 'application/vnd.openstreetmap.data+xml'],
    ['otc', 'application/vnd.oasis.opendocument.chart-template'],
    ['otf', 'font/otf'],
    ['otg', 'application/vnd.oasis.opendocument.graphics-template'],
    ['oth', 'application/vnd.oasis.opendocument.text-web'],
    ['oti', 'application/vnd.oasis.opendocument.image-template'],
    ['otp', 'application/vnd.oasis.opendocument.presentation-template'],
    ['ots', 'application/vnd.oasis.opendocument.spreadsheet-template'],
    ['ott', 'application/vnd.oasis.opendocument.text-template'],
    ['ova', 'application/x-virtualbox-ova'],
    ['ovf', 'application/x-virtualbox-ovf'],
    ['owl', 'application/rdf+xml'],
    ['oxps', 'application/oxps'],
    ['oxt', 'application/vnd.openofficeorg.extension'],
    ['p', 'text/x-pascal'],
    ['p7a', 'application/x-pkcs7-signature'],
    ['p7b', 'application/x-pkcs7-certificates'],
    ['p7c', 'application/pkcs7-mime'],
    ['p7m', 'application/pkcs7-mime'],
    ['p7r', 'application/x-pkcs7-certreqresp'],
    ['p7s', 'application/pkcs7-signature'],
    ['p8', 'application/pkcs8'],
    ['p10', 'application/x-pkcs10'],
    ['p12', 'application/x-pkcs12'],
    ['pac', 'application/x-ns-proxy-autoconfig'],
    ['pages', 'application/x-iwork-pages-sffpages'],
    ['pas', 'text/x-pascal'],
    ['paw', 'application/vnd.pawaafile'],
    ['pbd', 'application/vnd.powerbuilder6'],
    ['pbm', 'image/x-portable-bitmap'],
    ['pcap', 'application/vnd.tcpdump.pcap'],
    ['pcf', 'application/x-font-pcf'],
    ['pcl', 'application/vnd.hp-pcl'],
    ['pclxl', 'application/vnd.hp-pclxl'],
    ['pct', 'image/x-pict'],
    ['pcurl', 'application/vnd.curl.pcurl'],
    ['pcx', 'image/x-pcx'],
    ['pdb', 'application/x-pilot'],
    ['pde', 'text/x-processing'],
    ['pdf', 'application/pdf'],
    ['pem', 'application/x-x509-user-cert'],
    ['pfa', 'application/x-font-type1'],
    ['pfb', 'application/x-font-type1'],
    ['pfm', 'application/x-font-type1'],
    ['pfr', 'application/font-tdpfr'],
    ['pfx', 'application/x-pkcs12'],
    ['pgm', 'image/x-portable-graymap'],
    ['pgn', 'application/x-chess-pgn'],
    ['pgp', 'application/pgp'],
    ['php', 'application/x-httpd-php'],
    ['php3', 'application/x-httpd-php'],
    ['php4', 'application/x-httpd-php'],
    ['phps', 'application/x-httpd-php-source'],
    ['phtml', 'application/x-httpd-php'],
    ['pic', 'image/x-pict'],
    ['pkg', 'application/octet-stream'],
    ['pki', 'application/pkixcmp'],
    ['pkipath', 'application/pkix-pkipath'],
    ['pkpass', 'application/vnd.apple.pkpass'],
    ['pl', 'application/x-perl'],
    ['plb', 'application/vnd.3gpp.pic-bw-large'],
    ['plc', 'application/vnd.mobius.plc'],
    ['plf', 'application/vnd.pocketlearn'],
    ['pls', 'application/pls+xml'],
    ['pm', 'application/x-perl'],
    ['pml', 'application/vnd.ctc-posml'],
    ['png', 'image/png'],
    ['pnm', 'image/x-portable-anymap'],
    ['portpkg', 'application/vnd.macports.portpkg'],
    ['pot', 'application/vnd.ms-powerpoint'],
    ['potm', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12'],
    ['potx', 'application/vnd.openxmlformats-officedocument.presentationml.template'],
    ['ppa', 'application/vnd.ms-powerpoint'],
    ['ppam', 'application/vnd.ms-powerpoint.addin.macroEnabled.12'],
    ['ppd', 'application/vnd.cups-ppd'],
    ['ppm', 'image/x-portable-pixmap'],
    ['pps', 'application/vnd.ms-powerpoint'],
    ['ppsm', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'],
    ['ppsx', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow'],
    ['ppt', 'application/powerpoint'],
    ['pptm', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12'],
    ['pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
    ['pqa', 'application/vnd.palm'],
    ['prc', 'application/x-pilot'],
    ['pre', 'application/vnd.lotus-freelance'],
    ['prf', 'application/pics-rules'],
    ['provx', 'application/provenance+xml'],
    ['ps', 'application/postscript'],
    ['psb', 'application/vnd.3gpp.pic-bw-small'],
    ['psd', 'application/x-photoshop'],
    ['psf', 'application/x-font-linux-psf'],
    ['pskcxml', 'application/pskc+xml'],
    ['pti', 'image/prs.pti'],
    ['ptid', 'application/vnd.pvi.ptid1'],
    ['pub', 'application/x-mspublisher'],
    ['pvb', 'application/vnd.3gpp.pic-bw-var'],
    ['pwn', 'application/vnd.3m.post-it-notes'],
    ['pya', 'audio/vnd.ms-playready.media.pya'],
    ['pyv', 'video/vnd.ms-playready.media.pyv'],
    ['qam', 'application/vnd.epson.quickanime'],
    ['qbo', 'application/vnd.intu.qbo'],
    ['qfx', 'application/vnd.intu.qfx'],
    ['qps', 'application/vnd.publishare-delta-tree'],
    ['qt', 'video/quicktime'],
    ['qwd', 'application/vnd.quark.quarkxpress'],
    ['qwt', 'application/vnd.quark.quarkxpress'],
    ['qxb', 'application/vnd.quark.quarkxpress'],
    ['qxd', 'application/vnd.quark.quarkxpress'],
    ['qxl', 'application/vnd.quark.quarkxpress'],
    ['qxt', 'application/vnd.quark.quarkxpress'],
    ['ra', 'audio/x-realaudio'],
    ['ram', 'audio/x-pn-realaudio'],
    ['raml', 'application/raml+yaml'],
    ['rapd', 'application/route-apd+xml'],
    ['rar', 'application/x-rar'],
    ['ras', 'image/x-cmu-raster'],
    ['rcprofile', 'application/vnd.ipunplugged.rcprofile'],
    ['rdf', 'application/rdf+xml'],
    ['rdz', 'application/vnd.data-vision.rdz'],
    ['relo', 'application/p2p-overlay+xml'],
    ['rep', 'application/vnd.businessobjects'],
    ['res', 'application/x-dtbresource+xml'],
    ['rgb', 'image/x-rgb'],
    ['rif', 'application/reginfo+xml'],
    ['rip', 'audio/vnd.rip'],
    ['ris', 'application/x-research-info-systems'],
    ['rl', 'application/resource-lists+xml'],
    ['rlc', 'image/vnd.fujixerox.edmics-rlc'],
    ['rld', 'application/resource-lists-diff+xml'],
    ['rm', 'audio/x-pn-realaudio'],
    ['rmi', 'audio/midi'],
    ['rmp', 'audio/x-pn-realaudio-plugin'],
    ['rms', 'application/vnd.jcp.javame.midlet-rms'],
    ['rmvb', 'application/vnd.rn-realmedia-vbr'],
    ['rnc', 'application/relax-ng-compact-syntax'],
    ['rng', 'application/xml'],
    ['roa', 'application/rpki-roa'],
    ['roff', 'text/troff'],
    ['rp9', 'application/vnd.cloanto.rp9'],
    ['rpm', 'audio/x-pn-realaudio-plugin'],
    ['rpss', 'application/vnd.nokia.radio-presets'],
    ['rpst', 'application/vnd.nokia.radio-preset'],
    ['rq', 'application/sparql-query'],
    ['rs', 'application/rls-services+xml'],
    ['rsa', 'application/x-pkcs7'],
    ['rsat', 'application/atsc-rsat+xml'],
    ['rsd', 'application/rsd+xml'],
    ['rsheet', 'application/urc-ressheet+xml'],
    ['rss', 'application/rss+xml'],
    ['rtf', 'text/rtf'],
    ['rtx', 'text/richtext'],
    ['run', 'application/x-makeself'],
    ['rusd', 'application/route-usd+xml'],
    ['rv', 'video/vnd.rn-realvideo'],
    ['s', 'text/x-asm'],
    ['s3m', 'audio/s3m'],
    ['saf', 'application/vnd.yamaha.smaf-audio'],
    ['sass', 'text/x-sass'],
    ['sbml', 'application/sbml+xml'],
    ['sc', 'application/vnd.ibm.secure-container'],
    ['scd', 'application/x-msschedule'],
    ['scm', 'application/vnd.lotus-screencam'],
    ['scq', 'application/scvp-cv-request'],
    ['scs', 'application/scvp-cv-response'],
    ['scss', 'text/x-scss'],
    ['scurl', 'text/vnd.curl.scurl'],
    ['sda', 'application/vnd.stardivision.draw'],
    ['sdc', 'application/vnd.stardivision.calc'],
    ['sdd', 'application/vnd.stardivision.impress'],
    ['sdkd', 'application/vnd.solent.sdkm+xml'],
    ['sdkm', 'application/vnd.solent.sdkm+xml'],
    ['sdp', 'application/sdp'],
    ['sdw', 'application/vnd.stardivision.writer'],
    ['sea', 'application/octet-stream'],
    ['see', 'application/vnd.seemail'],
    ['seed', 'application/vnd.fdsn.seed'],
    ['sema', 'application/vnd.sema'],
    ['semd', 'application/vnd.semd'],
    ['semf', 'application/vnd.semf'],
    ['senmlx', 'application/senml+xml'],
    ['sensmlx', 'application/sensml+xml'],
    ['ser', 'application/java-serialized-object'],
    ['setpay', 'application/set-payment-initiation'],
    ['setreg', 'application/set-registration-initiation'],
    ['sfd-hdstx', 'application/vnd.hydrostatix.sof-data'],
    ['sfs', 'application/vnd.spotfire.sfs'],
    ['sfv', 'text/x-sfv'],
    ['sgi', 'image/sgi'],
    ['sgl', 'application/vnd.stardivision.writer-global'],
    ['sgm', 'text/sgml'],
    ['sgml', 'text/sgml'],
    ['sh', 'application/x-sh'],
    ['shar', 'application/x-shar'],
    ['shex', 'text/shex'],
    ['shf', 'application/shf+xml'],
    ['shtml', 'text/html'],
    ['sid', 'image/x-mrsid-image'],
    ['sieve', 'application/sieve'],
    ['sig', 'application/pgp-signature'],
    ['sil', 'audio/silk'],
    ['silo', 'model/mesh'],
    ['sis', 'application/vnd.symbian.install'],
    ['sisx', 'application/vnd.symbian.install'],
    ['sit', 'application/x-stuffit'],
    ['sitx', 'application/x-stuffitx'],
    ['siv', 'application/sieve'],
    ['skd', 'application/vnd.koan'],
    ['skm', 'application/vnd.koan'],
    ['skp', 'application/vnd.koan'],
    ['skt', 'application/vnd.koan'],
    ['sldm', 'application/vnd.ms-powerpoint.slide.macroenabled.12'],
    ['sldx', 'application/vnd.openxmlformats-officedocument.presentationml.slide'],
    ['slim', 'text/slim'],
    ['slm', 'text/slim'],
    ['sls', 'application/route-s-tsid+xml'],
    ['slt', 'application/vnd.epson.salt'],
    ['sm', 'application/vnd.stepmania.stepchart'],
    ['smf', 'application/vnd.stardivision.math'],
    ['smi', 'application/smil'],
    ['smil', 'application/smil'],
    ['smv', 'video/x-smv'],
    ['smzip', 'application/vnd.stepmania.package'],
    ['snd', 'audio/basic'],
    ['snf', 'application/x-font-snf'],
    ['so', 'application/octet-stream'],
    ['spc', 'application/x-pkcs7-certificates'],
    ['spdx', 'text/spdx'],
    ['spf', 'application/vnd.yamaha.smaf-phrase'],
    ['spl', 'application/x-futuresplash'],
    ['spot', 'text/vnd.in3d.spot'],
    ['spp', 'application/scvp-vp-response'],
    ['spq', 'application/scvp-vp-request'],
    ['spx', 'audio/ogg'],
    ['sql', 'application/x-sql'],
    ['src', 'application/x-wais-source'],
    ['srt', 'application/x-subrip'],
    ['sru', 'application/sru+xml'],
    ['srx', 'application/sparql-results+xml'],
    ['ssdl', 'application/ssdl+xml'],
    ['sse', 'application/vnd.kodak-descriptor'],
    ['ssf', 'application/vnd.epson.ssf'],
    ['ssml', 'application/ssml+xml'],
    ['sst', 'application/octet-stream'],
    ['st', 'application/vnd.sailingtracker.track'],
    ['stc', 'application/vnd.sun.xml.calc.template'],
    ['std', 'application/vnd.sun.xml.draw.template'],
    ['stf', 'application/vnd.wt.stf'],
    ['sti', 'application/vnd.sun.xml.impress.template'],
    ['stk', 'application/hyperstudio'],
    ['stl', 'model/stl'],
    ['stpx', 'model/step+xml'],
    ['stpxz', 'model/step-xml+zip'],
    ['stpz', 'model/step+zip'],
    ['str', 'application/vnd.pg.format'],
    ['stw', 'application/vnd.sun.xml.writer.template'],
    ['styl', 'text/stylus'],
    ['stylus', 'text/stylus'],
    ['sub', 'text/vnd.dvb.subtitle'],
    ['sus', 'application/vnd.sus-calendar'],
    ['susp', 'application/vnd.sus-calendar'],
    ['sv4cpio', 'application/x-sv4cpio'],
    ['sv4crc', 'application/x-sv4crc'],
    ['svc', 'application/vnd.dvb.service'],
    ['svd', 'application/vnd.svd'],
    ['svg', 'image/svg+xml'],
    ['svgz', 'image/svg+xml'],
    ['swa', 'application/x-director'],
    ['swf', 'application/x-shockwave-flash'],
    ['swi', 'application/vnd.aristanetworks.swi'],
    ['swidtag', 'application/swid+xml'],
    ['sxc', 'application/vnd.sun.xml.calc'],
    ['sxd', 'application/vnd.sun.xml.draw'],
    ['sxg', 'application/vnd.sun.xml.writer.global'],
    ['sxi', 'application/vnd.sun.xml.impress'],
    ['sxm', 'application/vnd.sun.xml.math'],
    ['sxw', 'application/vnd.sun.xml.writer'],
    ['t', 'text/troff'],
    ['t3', 'application/x-t3vm-image'],
    ['t38', 'image/t38'],
    ['taglet', 'application/vnd.mynfc'],
    ['tao', 'application/vnd.tao.intent-module-archive'],
    ['tap', 'image/vnd.tencent.tap'],
    ['tar', 'application/x-tar'],
    ['tcap', 'application/vnd.3gpp2.tcap'],
    ['tcl', 'application/x-tcl'],
    ['td', 'application/urc-targetdesc+xml'],
    ['teacher', 'application/vnd.smart.teacher'],
    ['tei', 'application/tei+xml'],
    ['teicorpus', 'application/tei+xml'],
    ['tex', 'application/x-tex'],
    ['texi', 'application/x-texinfo'],
    ['texinfo', 'application/x-texinfo'],
    ['text', 'text/plain'],
    ['tfi', 'application/thraud+xml'],
    ['tfm', 'application/x-tex-tfm'],
    ['tfx', 'image/tiff-fx'],
    ['tga', 'image/x-tga'],
    ['tgz', 'application/x-tar'],
    ['thmx', 'application/vnd.ms-officetheme'],
    ['tif', 'image/tiff'],
    ['tiff', 'image/tiff'],
    ['tk', 'application/x-tcl'],
    ['tmo', 'application/vnd.tmobile-livetv'],
    ['toml', 'application/toml'],
    ['torrent', 'application/x-bittorrent'],
    ['tpl', 'application/vnd.groove-tool-template'],
    ['tpt', 'application/vnd.trid.tpt'],
    ['tr', 'text/troff'],
    ['tra', 'application/vnd.trueapp'],
    ['trig', 'application/trig'],
    ['trm', 'application/x-msterminal'],
    ['ts', 'video/mp2t'],
    ['tsd', 'application/timestamped-data'],
    ['tsv', 'text/tab-separated-values'],
    ['ttc', 'font/collection'],
    ['ttf', 'font/ttf'],
    ['ttl', 'text/turtle'],
    ['ttml', 'application/ttml+xml'],
    ['twd', 'application/vnd.simtech-mindmapper'],
    ['twds', 'application/vnd.simtech-mindmapper'],
    ['txd', 'application/vnd.genomatix.tuxedo'],
    ['txf', 'application/vnd.mobius.txf'],
    ['txt', 'text/plain'],
    ['u8dsn', 'message/global-delivery-status'],
    ['u8hdr', 'message/global-headers'],
    ['u8mdn', 'message/global-disposition-notification'],
    ['u8msg', 'message/global'],
    ['u32', 'application/x-authorware-bin'],
    ['ubj', 'application/ubjson'],
    ['udeb', 'application/x-debian-package'],
    ['ufd', 'application/vnd.ufdl'],
    ['ufdl', 'application/vnd.ufdl'],
    ['ulx', 'application/x-glulx'],
    ['umj', 'application/vnd.umajin'],
    ['unityweb', 'application/vnd.unity'],
    ['uoml', 'application/vnd.uoml+xml'],
    ['uri', 'text/uri-list'],
    ['uris', 'text/uri-list'],
    ['urls', 'text/uri-list'],
    ['usdz', 'model/vnd.usdz+zip'],
    ['ustar', 'application/x-ustar'],
    ['utz', 'application/vnd.uiq.theme'],
    ['uu', 'text/x-uuencode'],
    ['uva', 'audio/vnd.dece.audio'],
    ['uvd', 'application/vnd.dece.data'],
    ['uvf', 'application/vnd.dece.data'],
    ['uvg', 'image/vnd.dece.graphic'],
    ['uvh', 'video/vnd.dece.hd'],
    ['uvi', 'image/vnd.dece.graphic'],
    ['uvm', 'video/vnd.dece.mobile'],
    ['uvp', 'video/vnd.dece.pd'],
    ['uvs', 'video/vnd.dece.sd'],
    ['uvt', 'application/vnd.dece.ttml+xml'],
    ['uvu', 'video/vnd.uvvu.mp4'],
    ['uvv', 'video/vnd.dece.video'],
    ['uvva', 'audio/vnd.dece.audio'],
    ['uvvd', 'application/vnd.dece.data'],
    ['uvvf', 'application/vnd.dece.data'],
    ['uvvg', 'image/vnd.dece.graphic'],
    ['uvvh', 'video/vnd.dece.hd'],
    ['uvvi', 'image/vnd.dece.graphic'],
    ['uvvm', 'video/vnd.dece.mobile'],
    ['uvvp', 'video/vnd.dece.pd'],
    ['uvvs', 'video/vnd.dece.sd'],
    ['uvvt', 'application/vnd.dece.ttml+xml'],
    ['uvvu', 'video/vnd.uvvu.mp4'],
    ['uvvv', 'video/vnd.dece.video'],
    ['uvvx', 'application/vnd.dece.unspecified'],
    ['uvvz', 'application/vnd.dece.zip'],
    ['uvx', 'application/vnd.dece.unspecified'],
    ['uvz', 'application/vnd.dece.zip'],
    ['vbox', 'application/x-virtualbox-vbox'],
    ['vbox-extpack', 'application/x-virtualbox-vbox-extpack'],
    ['vcard', 'text/vcard'],
    ['vcd', 'application/x-cdlink'],
    ['vcf', 'text/x-vcard'],
    ['vcg', 'application/vnd.groove-vcard'],
    ['vcs', 'text/x-vcalendar'],
    ['vcx', 'application/vnd.vcx'],
    ['vdi', 'application/x-virtualbox-vdi'],
    ['vds', 'model/vnd.sap.vds'],
    ['vhd', 'application/x-virtualbox-vhd'],
    ['vis', 'application/vnd.visionary'],
    ['viv', 'video/vnd.vivo'],
    ['vlc', 'application/videolan'],
    ['vmdk', 'application/x-virtualbox-vmdk'],
    ['vob', 'video/x-ms-vob'],
    ['vor', 'application/vnd.stardivision.writer'],
    ['vox', 'application/x-authorware-bin'],
    ['vrml', 'model/vrml'],
    ['vsd', 'application/vnd.visio'],
    ['vsf', 'application/vnd.vsf'],
    ['vss', 'application/vnd.visio'],
    ['vst', 'application/vnd.visio'],
    ['vsw', 'application/vnd.visio'],
    ['vtf', 'image/vnd.valve.source.texture'],
    ['vtt', 'text/vtt'],
    ['vtu', 'model/vnd.vtu'],
    ['vxml', 'application/voicexml+xml'],
    ['w3d', 'application/x-director'],
    ['wad', 'application/x-doom'],
    ['wadl', 'application/vnd.sun.wadl+xml'],
    ['war', 'application/java-archive'],
    ['wasm', 'application/wasm'],
    ['wav', 'audio/x-wav'],
    ['wax', 'audio/x-ms-wax'],
    ['wbmp', 'image/vnd.wap.wbmp'],
    ['wbs', 'application/vnd.criticaltools.wbs+xml'],
    ['wbxml', 'application/wbxml'],
    ['wcm', 'application/vnd.ms-works'],
    ['wdb', 'application/vnd.ms-works'],
    ['wdp', 'image/vnd.ms-photo'],
    ['weba', 'audio/webm'],
    ['webapp', 'application/x-web-app-manifest+json'],
    ['webm', 'video/webm'],
    ['webmanifest', 'application/manifest+json'],
    ['webp', 'image/webp'],
    ['wg', 'application/vnd.pmi.widget'],
    ['wgt', 'application/widget'],
    ['wks', 'application/vnd.ms-works'],
    ['wm', 'video/x-ms-wm'],
    ['wma', 'audio/x-ms-wma'],
    ['wmd', 'application/x-ms-wmd'],
    ['wmf', 'image/wmf'],
    ['wml', 'text/vnd.wap.wml'],
    ['wmlc', 'application/wmlc'],
    ['wmls', 'text/vnd.wap.wmlscript'],
    ['wmlsc', 'application/vnd.wap.wmlscriptc'],
    ['wmv', 'video/x-ms-wmv'],
    ['wmx', 'video/x-ms-wmx'],
    ['wmz', 'application/x-msmetafile'],
    ['woff', 'font/woff'],
    ['woff2', 'font/woff2'],
    ['word', 'application/msword'],
    ['wpd', 'application/vnd.wordperfect'],
    ['wpl', 'application/vnd.ms-wpl'],
    ['wps', 'application/vnd.ms-works'],
    ['wqd', 'application/vnd.wqd'],
    ['wri', 'application/x-mswrite'],
    ['wrl', 'model/vrml'],
    ['wsc', 'message/vnd.wfa.wsc'],
    ['wsdl', 'application/wsdl+xml'],
    ['wspolicy', 'application/wspolicy+xml'],
    ['wtb', 'application/vnd.webturbo'],
    ['wvx', 'video/x-ms-wvx'],
    ['x3d', 'model/x3d+xml'],
    ['x3db', 'model/x3d+fastinfoset'],
    ['x3dbz', 'model/x3d+binary'],
    ['x3dv', 'model/x3d-vrml'],
    ['x3dvz', 'model/x3d+vrml'],
    ['x3dz', 'model/x3d+xml'],
    ['x32', 'application/x-authorware-bin'],
    ['x_b', 'model/vnd.parasolid.transmit.binary'],
    ['x_t', 'model/vnd.parasolid.transmit.text'],
    ['xaml', 'application/xaml+xml'],
    ['xap', 'application/x-silverlight-app'],
    ['xar', 'application/vnd.xara'],
    ['xav', 'application/xcap-att+xml'],
    ['xbap', 'application/x-ms-xbap'],
    ['xbd', 'application/vnd.fujixerox.docuworks.binder'],
    ['xbm', 'image/x-xbitmap'],
    ['xca', 'application/xcap-caps+xml'],
    ['xcs', 'application/calendar+xml'],
    ['xdf', 'application/xcap-diff+xml'],
    ['xdm', 'application/vnd.syncml.dm+xml'],
    ['xdp', 'application/vnd.adobe.xdp+xml'],
    ['xdssc', 'application/dssc+xml'],
    ['xdw', 'application/vnd.fujixerox.docuworks'],
    ['xel', 'application/xcap-el+xml'],
    ['xenc', 'application/xenc+xml'],
    ['xer', 'application/patch-ops-error+xml'],
    ['xfdf', 'application/vnd.adobe.xfdf'],
    ['xfdl', 'application/vnd.xfdl'],
    ['xht', 'application/xhtml+xml'],
    ['xhtml', 'application/xhtml+xml'],
    ['xhvml', 'application/xv+xml'],
    ['xif', 'image/vnd.xiff'],
    ['xl', 'application/excel'],
    ['xla', 'application/vnd.ms-excel'],
    ['xlam', 'application/vnd.ms-excel.addin.macroEnabled.12'],
    ['xlc', 'application/vnd.ms-excel'],
    ['xlf', 'application/xliff+xml'],
    ['xlm', 'application/vnd.ms-excel'],
    ['xls', 'application/vnd.ms-excel'],
    ['xlsb', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'],
    ['xlsm', 'application/vnd.ms-excel.sheet.macroEnabled.12'],
    ['xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    ['xlt', 'application/vnd.ms-excel'],
    ['xltm', 'application/vnd.ms-excel.template.macroEnabled.12'],
    ['xltx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template'],
    ['xlw', 'application/vnd.ms-excel'],
    ['xm', 'audio/xm'],
    ['xml', 'application/xml'],
    ['xns', 'application/xcap-ns+xml'],
    ['xo', 'application/vnd.olpc-sugar'],
    ['xop', 'application/xop+xml'],
    ['xpi', 'application/x-xpinstall'],
    ['xpl', 'application/xproc+xml'],
    ['xpm', 'image/x-xpixmap'],
    ['xpr', 'application/vnd.is-xpr'],
    ['xps', 'application/vnd.ms-xpsdocument'],
    ['xpw', 'application/vnd.intercon.formnet'],
    ['xpx', 'application/vnd.intercon.formnet'],
    ['xsd', 'application/xml'],
    ['xsl', 'application/xml'],
    ['xslt', 'application/xslt+xml'],
    ['xsm', 'application/vnd.syncml+xml'],
    ['xspf', 'application/xspf+xml'],
    ['xul', 'application/vnd.mozilla.xul+xml'],
    ['xvm', 'application/xv+xml'],
    ['xvml', 'application/xv+xml'],
    ['xwd', 'image/x-xwindowdump'],
    ['xyz', 'chemical/x-xyz'],
    ['xz', 'application/x-xz'],
    ['yaml', 'text/yaml'],
    ['yang', 'application/yang'],
    ['yin', 'application/yin+xml'],
    ['yml', 'text/yaml'],
    ['ymp', 'text/x-suse-ymp'],
    ['z', 'application/x-compress'],
    ['z1', 'application/x-zmachine'],
    ['z2', 'application/x-zmachine'],
    ['z3', 'application/x-zmachine'],
    ['z4', 'application/x-zmachine'],
    ['z5', 'application/x-zmachine'],
    ['z6', 'application/x-zmachine'],
    ['z7', 'application/x-zmachine'],
    ['z8', 'application/x-zmachine'],
    ['zaz', 'application/vnd.zzazz.deck+xml'],
    ['zip', 'application/zip'],
    ['zir', 'application/vnd.zul'],
    ['zirz', 'application/vnd.zul'],
    ['zmm', 'application/vnd.handheld-entertainment+xml'],
    ['zsh', 'text/x-scriptzsh']
]);
function toFileWithPath(file, path, h) {
    const f = withMimeType(file);
    const { webkitRelativePath } = file;
    const p = typeof path === 'string'
        ? path
        // If <input webkitdirectory> is set,
        // the File will have a {webkitRelativePath} property
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
        : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
            ? webkitRelativePath
            : `./${file.name}`;
    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
        setObjProp(f, 'path', p);
    }
    // Always populate a relative path so that even electron apps have access to a relativePath value
    setObjProp(f, 'relativePath', p);
    return f;
}
function withMimeType(file) {
    const { name } = file;
    const hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        const ext = name.split('.')
            .pop().toLowerCase();
        const type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}
function setObjProp(f, key, value) {
    Object.defineProperty(f, key, {
        value,
        writable: false,
        configurable: false,
        enumerable: true
    });
}

const FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store', // macOs
    'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 *
 * EXPERIMENTAL: A list of https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle objects can also be passed as an arg
 * and a list of File objects will be returned.
 *
 * @param evt
 */
function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function* () {
        if (isObject(evt) && isDataTransfer(evt.dataTransfer)) {
            return getDataTransferFiles(evt.dataTransfer, evt.type);
        }
        else if (isChangeEvt(evt)) {
            return getInputFiles(evt);
        }
        else if (Array.isArray(evt) && evt.every(item => 'getFile' in item && typeof item.getFile === 'function')) {
            return getFsHandleFiles(evt);
        }
        return [];
    });
}
function isDataTransfer(value) {
    return isObject(value);
}
function isChangeEvt(value) {
    return isObject(value) && isObject(value.target);
}
function isObject(v) {
    return typeof v === 'object' && v !== null;
}
function getInputFiles(evt) {
    return fromList(evt.target.files).map(file => toFileWithPath(file));
}
// Ee expect each handle to be https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
function getFsHandleFiles(handles) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield Promise.all(handles.map(h => h.getFile()));
        return files.map(file => toFileWithPath(file));
    });
}
function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function* () {
        // IE11 does not support dataTransfer.items
        // See https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/items#Browser_compatibility
        if (dt.items) {
            const items = fromList(dt.items)
                .filter(item => item.kind === 'file');
            // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
            // only 'dragstart' and 'drop' has access to the data (source node)
            if (type !== 'drop') {
                return items;
            }
            const files = yield Promise.all(items.map(toFilePromises));
            return noIgnoredFiles(flatten(files));
        }
        return noIgnoredFiles(fromList(dt.files)
            .map(file => toFileWithPath(file)));
    });
}
function noIgnoredFiles(files) {
    return files.filter(file => FILES_TO_IGNORE.indexOf(file.name) === -1);
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    if (items === null) {
        return [];
    }
    const files = [];
    // tslint:disable: prefer-for-of
    for (let i = 0; i < items.length; i++) {
        const file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    const entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item, entry);
}
function flatten(items) {
    return items.reduce((acc, files) => [
        ...acc,
        ...(Array.isArray(files) ? flatten(files) : [files])
    ], []);
}
function fromDataTransferItem(item, entry) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        // Check if we're in a secure context; due to a bug in Chrome (as far as we know)
        // the browser crashes when calling this API (yet to be confirmed as a consistent behaviour).
        //
        // See:
        // - https://issues.chromium.org/issues/40186242
        // - https://github.com/react-dropzone/react-dropzone/issues/1397
        if (globalThis.isSecureContext && typeof item.getAsFileSystemHandle === 'function') {
            const h = yield item.getAsFileSystemHandle();
            if (h === null) {
                throw new Error(`${item} is not a File`);
            }
            // It seems that the handle can be `undefined` (see https://github.com/react-dropzone/file-selector/issues/120),
            // so we check if it isn't; if it is, the code path continues to the next API (`getAsFile`).
            if (h !== undefined) {
                const file = yield h.getFile();
                file.handle = h;
                return toFileWithPath(file);
            }
        }
        const file = item.getAsFile();
        if (!file) {
            throw new Error(`${item} is not a File`);
        }
        const fwp = toFileWithPath(file, (_a = entry === null || entry === void 0 ? void 0 : entry.fullPath) !== null && _a !== void 0 ? _a : undefined);
        return fwp;
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function* () {
        return entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry);
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    const reader = entry.createReader();
    return new Promise((resolve, reject) => {
        const entries = [];
        function readEntries() {
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries((batch) => __awaiter(this, void 0, void 0, function* () {
                if (!batch.length) {
                    // Done reading directory
                    try {
                        const files = yield Promise.all(entries);
                        resolve(files);
                    }
                    catch (err) {
                        reject(err);
                    }
                }
                else {
                    const items = Promise.all(batch.map(fromEntry));
                    entries.push(items);
                    // Continue reading
                    readEntries();
                }
            }), (err) => {
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            entry.file((file) => {
                const fwp = toFileWithPath(file, entry.fullPath);
                resolve(fwp);
            }, (err) => {
                reject(err);
            });
        });
    });
}

var es = {};

var hasRequiredEs;

function requireEs () {
	if (hasRequiredEs) return es;
	hasRequiredEs = 1;

	es.__esModule = true;

	es.default = function (file, acceptedFiles) {
	  if (file && acceptedFiles) {
	    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');

	    if (acceptedFilesArray.length === 0) {
	      return true;
	    }

	    var fileName = file.name || '';
	    var mimeType = (file.type || '').toLowerCase();
	    var baseMimeType = mimeType.replace(/\/.*$/, '');
	    return acceptedFilesArray.some(function (type) {
	      var validType = type.trim().toLowerCase();

	      if (validType.charAt(0) === '.') {
	        return fileName.toLowerCase().endsWith(validType);
	      } else if (validType.endsWith('/*')) {
	        // This is something like a image/* mime type
	        return baseMimeType === validType.replace(/\/.*$/, '');
	      }

	      return mimeType === validType;
	    });
	  }

	  return true;
	};
	return es;
}

var esExports = requireEs();
const _accepts = /*@__PURE__*/getDefaultExportFromCjs(esExports);

function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }

function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
var accepts = typeof _accepts === "function" ? _accepts : _accepts.default; // Error codes

var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
/**
 *
 * @param {string} accept
 */

var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr() {
  var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var acceptArr = accept.split(",");
  var msg = acceptArr.length > 1 ? "one of ".concat(acceptArr.join(", ")) : acceptArr[0];
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(msg)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
/**
 * Check if file is accepted.
 *
 * Firefox versions prior to 53 return a bogus MIME type for every file drag,
 * so dragovers with that MIME type will always be accepted.
 *
 * @param {File} file
 * @param {string} accept
 * @returns
 */

function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || accepts(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
  }

  return [true, null];
}

function isDefined(value) {
  return value !== undefined && value !== null;
}
/**
 *
 * @param {object} options
 * @param {File[]} options.files
 * @param {string} [options.accept]
 * @param {number} [options.minSize]
 * @param {number} [options.maxSize]
 * @param {boolean} [options.multiple]
 * @param {number} [options.maxFiles]
 * @param {(f: File) => FileError|FileError[]|null} [options.validator]
 * @returns
 */


function allFilesAccepted(_ref) {
  var files = _ref.files,
      accept = _ref.accept,
      minSize = _ref.minSize,
      maxSize = _ref.maxSize,
      multiple = _ref.multiple,
      maxFiles = _ref.maxFiles,
      validator = _ref.validator;

  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }

  return files.every(function (file) {
    var _fileAccepted = fileAccepted(file, accept),
        _fileAccepted2 = _slicedToArray$1(_fileAccepted, 1),
        accepted = _fileAccepted2[0];

    var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
        _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 1),
        sizeMatch = _fileMatchSize2[0];

    var customErrors = validator ? validator(file) : null;
    return accepted && sizeMatch && !customErrors;
  });
} // React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble

function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }

  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


  return Array.prototype.some.call(event.dataTransfer.types, function (type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}

function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}

function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}

function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */

function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return isPropagationStopped(event);
    });
  };
}
/**
 * canUseFileSystemAccessAPI checks if the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
 * is supported by the browser.
 * @returns {boolean}
 */

function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
/**
 * Convert the `{accept}` dropzone prop to the
 * `{types}` option for https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker
 *
 * @param {AcceptProp} accept
 * @returns {{accept: string[]}[]}
 */

function pickerOptionsFromAccept(accept) {
  if (isDefined(accept)) {
    var acceptForPicker = Object.entries(accept).filter(function (_ref2) {
      var _ref3 = _slicedToArray$1(_ref2, 2),
          mimeType = _ref3[0],
          ext = _ref3[1];

      var ok = true;

      if (!isMIMEType(mimeType)) {
        console.warn("Skipped \"".concat(mimeType, "\" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types."));
        ok = false;
      }

      if (!Array.isArray(ext) || !ext.every(isExt)) {
        console.warn("Skipped \"".concat(mimeType, "\" because an invalid file extension was provided."));
        ok = false;
      }

      return ok;
    }).reduce(function (agg, _ref4) {
      var _ref5 = _slicedToArray$1(_ref4, 2),
          mimeType = _ref5[0],
          ext = _ref5[1];

      return _objectSpread$1(_objectSpread$1({}, agg), {}, _defineProperty$1({}, mimeType, ext));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: acceptForPicker
    }];
  }

  return accept;
}
/**
 * Convert the `{accept}` dropzone prop to an array of MIME types/extensions.
 * @param {AcceptProp} accept
 * @returns {string}
 */

function acceptPropAsAcceptAttr(accept) {
  if (isDefined(accept)) {
    return Object.entries(accept).reduce(function (a, _ref6) {
      var _ref7 = _slicedToArray$1(_ref6, 2),
          mimeType = _ref7[0],
          ext = _ref7[1];

      return [].concat(_toConsumableArray$1(a), [mimeType], _toConsumableArray$1(ext));
    }, []) // Silently discard invalid entries as pickerOptionsFromAccept warns about these
    .filter(function (v) {
      return isMIMEType(v) || isExt(v);
    }).join(",");
  }

  return undefined;
}
/**
 * Check if v is an exception caused by aborting a request (e.g window.showOpenFilePicker()).
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is an abort exception.
 */

function isAbort(v) {
  return v instanceof DOMException && (v.name === "AbortError" || v.code === v.ABORT_ERR);
}
/**
 * Check if v is a security error.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is a security error.
 */

function isSecurityError(v) {
  return v instanceof DOMException && (v.name === "SecurityError" || v.code === v.SECURITY_ERR);
}
/**
 * Check if v is a MIME type string.
 *
 * See accepted format: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers.
 *
 * @param {string} v
 */

function isMIMEType(v) {
  return v === "audio/*" || v === "video/*" || v === "image/*" || v === "text/*" || v === "application/*" || /\w+\/[-+.\w]+/g.test(v);
}
/**
 * Check if v is a file extension.
 * @param {string} v
 */

function isExt(v) {
  return /^.*\.[\w]+$/.test(v);
}
/**
 * @typedef {Object.<string, string[]>} AcceptProp
 */

/**
 * @typedef {object} FileError
 * @property {string} message
 * @property {ErrorCode|string} code
 */

/**
 * @typedef {"file-invalid-type"|"file-too-large"|"file-too-small"|"too-many-files"} ErrorCode
 */

var _excluded = ["children"],
    _excluded2 = ["open"],
    _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
    _excluded4 = ["refKey", "onChange", "onClick"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */

var Dropzone = /*#__PURE__*/reactExports.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      params = _objectWithoutProperties(_ref, _excluded);

  var _useDropzone = useDropzone(params),
      open = _useDropzone.open,
      props = _objectWithoutProperties(_useDropzone, _excluded2);

  reactExports.useImperativeHandle(ref, function () {
    return {
      open: open
    };
  }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

  return /*#__PURE__*/$1CM7W$react.createElement(reactExports.Fragment, null, children(_objectSpread(_objectSpread({}, props), {}, {
    open: open
  })));
});
Dropzone.displayName = "Dropzone"; // Add default props for react-docgen

var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: false,
  autoFocus: false
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: PropTypes.func,

  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),

  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: PropTypes.bool,

  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: PropTypes.bool,

  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: PropTypes.bool,

  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: PropTypes.bool,

  /**
   * If true, disables drag 'n' drop
   */
  noDrag: PropTypes.bool,

  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: PropTypes.bool,

  /**
   * Minimum file size (in bytes)
   */
  minSize: PropTypes.number,

  /**
   * Maximum file size (in bytes)
   */
  maxSize: PropTypes.number,

  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: PropTypes.number,

  /**
   * Enable/disable the dropzone
   */
  disabled: PropTypes.bool,

  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: PropTypes.func,

  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: PropTypes.func,

  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: PropTypes.func,

  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: PropTypes.bool,

  /**
   * Set to true to focus the root element on render
   */
  autoFocus: PropTypes.bool,

  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: PropTypes.func,

  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: PropTypes.func,

  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: PropTypes.func,

  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: PropTypes.func,

  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: PropTypes.func
};
/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */

/**
 * An object with the current dropzone state.
 *
 * @typedef {object} DropzoneState
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {File[]} acceptedFiles Accepted files
 * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
 */

/**
 * An object with the dropzone methods.
 *
 * @typedef {object} DropzoneMethods
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 */

var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  acceptedFiles: [],
  fileRejections: []
};
/**
 * A React hook that creates a drag 'n' drop area.
 *
 * ```jsx
 * function MyDropzone(props) {
 *   const {getRootProps, getInputProps} = useDropzone({
 *     onDrop: acceptedFiles => {
 *       // do something with the File objects, e.g. upload to some server
 *     }
 *   });
 *   return (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag and drop some files here, or click to select files</p>
 *     </div>
 *   )
 * }
 * ```
 *
 * @function useDropzone
 *
 * @param {object} props
 * @param {import("./utils").AcceptProp} [props.accept] Set accepted file types.
 * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
 * Keep in mind that mime type determination is not reliable across platforms. CSV files,
 * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
 * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
 * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
 * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
 * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
 * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
 * Note that it also stops tracking the focus state.
 * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
 * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
 * @param {number} [props.minSize=0] Minimum file size (in bytes)
 * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
 * @param {boolean} [props.disabled=false] Enable/disable the dropzone
 * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
 * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
 * @param {boolean} [props.useFsAccessApi] Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
 * to open the file picker instead of using an `<input type="file">` click event.
 * @param {boolean} autoFocus Set to true to auto focus the root element.
 * @param {Function} [props.onFileDialogOpen] Cb for when opening the file dialog
 * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
 * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
 * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
 * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
 * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
 *
 * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
 * `accept` must be an object with keys as a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) and the value an array of file extensions (optional).
 * If `multiple` is set to false and additional files are dropped,
 * all files besides the first will be rejected.
 * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
 *
 * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
 * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
 *
 * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
 * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
 *
 * ```js
 * function onDrop(acceptedFiles) {
 *   const req = request.post('/upload')
 *   acceptedFiles.forEach(file => {
 *     req.attach(file.name, file)
 *   })
 *   req.end(callback)
 * }
 * ```
 * @param {dropAcceptedCb} [props.onDropAccepted]
 * @param {dropRejectedCb} [props.onDropRejected]
 * @param {(error: Error) => void} [props.onError]
 *
 * @returns {DropzoneState & DropzoneMethods}
 */

function useDropzone() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props),
      accept = _defaultProps$props.accept,
      disabled = _defaultProps$props.disabled,
      getFilesFromEvent = _defaultProps$props.getFilesFromEvent,
      maxSize = _defaultProps$props.maxSize,
      minSize = _defaultProps$props.minSize,
      multiple = _defaultProps$props.multiple,
      maxFiles = _defaultProps$props.maxFiles,
      onDragEnter = _defaultProps$props.onDragEnter,
      onDragLeave = _defaultProps$props.onDragLeave,
      onDragOver = _defaultProps$props.onDragOver,
      onDrop = _defaultProps$props.onDrop,
      onDropAccepted = _defaultProps$props.onDropAccepted,
      onDropRejected = _defaultProps$props.onDropRejected,
      onFileDialogCancel = _defaultProps$props.onFileDialogCancel,
      onFileDialogOpen = _defaultProps$props.onFileDialogOpen,
      useFsAccessApi = _defaultProps$props.useFsAccessApi,
      autoFocus = _defaultProps$props.autoFocus,
      preventDropOnDocument = _defaultProps$props.preventDropOnDocument,
      noClick = _defaultProps$props.noClick,
      noKeyboard = _defaultProps$props.noKeyboard,
      noDrag = _defaultProps$props.noDrag,
      noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling,
      onError = _defaultProps$props.onError,
      validator = _defaultProps$props.validator;

  var acceptAttr = reactExports.useMemo(function () {
    return acceptPropAsAcceptAttr(accept);
  }, [accept]);
  var pickerTypes = reactExports.useMemo(function () {
    return pickerOptionsFromAccept(accept);
  }, [accept]);
  var onFileDialogOpenCb = reactExports.useMemo(function () {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = reactExports.useMemo(function () {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  /**
   * @constant
   * @type {React.MutableRefObject<HTMLElement>}
   */

  var rootRef = reactExports.useRef(null);
  var inputRef = reactExports.useRef(null);

  var _useReducer = reactExports.useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive;
  var fsAccessApiWorksRef = reactExports.useRef(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI()); // Update file dialog active state when the window is focused on

  var onWindowFocus = function onWindowFocus() {
    // Execute the timeout only if the file dialog is opened in the browser
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          var files = inputRef.current.files;

          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };

  reactExports.useEffect(function () {
    window.addEventListener("focus", onWindowFocus, false);
    return function () {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = reactExports.useRef([]);

  var onDocumentDrop = function onDocumentDrop(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
      return;
    }

    event.preventDefault();
    dragTargetsRef.current = [];
  };

  reactExports.useEffect(function () {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }

    return function () {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]); // Auto focus the root when autoFocus is true

  reactExports.useEffect(function () {
    if (!disabled && autoFocus && rootRef.current) {
      rootRef.current.focus();
    }

    return function () {};
  }, [rootRef, autoFocus, disabled]);
  var onErrCb = reactExports.useCallback(function (e) {
    if (onError) {
      onError(e);
    } else {
      // Let the user know something's gone wrong if they haven't provided the onError cb.
      console.error(e);
    }
  }, [onError]);
  var onDragEnterCb = reactExports.useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        var fileCount = files.length;
        var isDragAccept = fileCount > 0 && allFilesAccepted({
          files: files,
          accept: acceptAttr,
          minSize: minSize,
          maxSize: maxSize,
          multiple: multiple,
          maxFiles: maxFiles,
          validator: validator
        });
        var isDragReject = fileCount > 0 && !isDragAccept;
        dispatch({
          isDragAccept: isDragAccept,
          isDragReject: isDragReject,
          isDragActive: true,
          type: "setDraggedFiles"
        });

        if (onDragEnter) {
          onDragEnter(event);
        }
      }).catch(function (e) {
        return onErrCb(e);
      });
    }
  }, [getFilesFromEvent, onDragEnter, onErrCb, noDragEventsBubbling, acceptAttr, minSize, maxSize, multiple, maxFiles, validator]);
  var onDragOverCb = reactExports.useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);

    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if (hasFiles && onDragOver) {
      onDragOver(event);
    }

    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = reactExports.useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event); // Only deactivate once the dropzone and all children have been left

    var targets = dragTargetsRef.current.filter(function (target) {
      return rootRef.current && rootRef.current.contains(target);
    }); // Make sure to remove a target present multiple times only once
    // (Firefox may fire dragenter/dragleave multiple times on the same element)

    var targetIdx = targets.indexOf(event.target);

    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }

    dragTargetsRef.current = targets;

    if (targets.length > 0) {
      return;
    }

    dispatch({
      type: "setDraggedFiles",
      isDragActive: false,
      isDragAccept: false,
      isDragReject: false
    });

    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = reactExports.useCallback(function (files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function (file) {
      var _fileAccepted = fileAccepted(file, acceptAttr),
          _fileAccepted2 = _slicedToArray(_fileAccepted, 2),
          accepted = _fileAccepted2[0],
          acceptError = _fileAccepted2[1];

      var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
          _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2),
          sizeMatch = _fileMatchSize2[0],
          sizeError = _fileMatchSize2[1];

      var customErrors = validator ? validator(file) : null;

      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];

        if (customErrors) {
          errors = errors.concat(customErrors);
        }

        fileRejections.push({
          file: file,
          errors: errors.filter(function (e) {
            return e;
          })
        });
      }
    });

    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      // Reject everything and empty accepted files
      acceptedFiles.forEach(function (file) {
        fileRejections.push({
          file: file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }

    dispatch({
      acceptedFiles: acceptedFiles,
      fileRejections: fileRejections,
      isDragReject: fileRejections.length > 0,
      type: "setFiles"
    });

    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }

    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }

    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, acceptAttr, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = reactExports.useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        setFiles(files, event);
      }).catch(function (e) {
        return onErrCb(e);
      });
    }

    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, onErrCb, noDragEventsBubbling]); // Fn for opening the file dialog programmatically

  var openFileDialog = reactExports.useCallback(function () {
    // No point to use FS access APIs if context is not secure
    // https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts#feature_detection
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb(); // https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker

      var opts = {
        multiple: multiple,
        types: pickerTypes
      };
      window.showOpenFilePicker(opts).then(function (handles) {
        return getFilesFromEvent(handles);
      }).then(function (files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function (e) {
        // AbortError means the user canceled
        if (isAbort(e)) {
          onFileDialogCancelCb(e);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e)) {
          fsAccessApiWorksRef.current = false; // CORS, so cannot use this API
          // Try using the input

          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          } else {
            onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
          }
        } else {
          onErrCb(e);
        }
      });
      return;
    }

    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, onErrCb, pickerTypes, multiple]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

  var onKeyDownCb = reactExports.useCallback(function (event) {
    // Ignore keyboard events bubbling up the DOM tree
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }

    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]); // Update focus state for the dropzone

  var onFocusCb = reactExports.useCallback(function () {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = reactExports.useCallback(function () {
    dispatch({
      type: "blur"
    });
  }, []); // Cb to open the file dialog when click occurs on the dropzone

  var onClickCb = reactExports.useCallback(function () {
    if (noClick) {
      return;
    } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
    // to ensure React can handle state changes
    // See: https://github.com/react-dropzone/react-dropzone/issues/450


    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);

  var composeHandler = function composeHandler(fn) {
    return disabled ? null : fn;
  };

  var composeKeyboardHandler = function composeKeyboardHandler(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };

  var composeDragHandler = function composeDragHandler(fn) {
    return noDrag ? null : composeHandler(fn);
  };

  var stopPropagation = function stopPropagation(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };

  var getRootProps = reactExports.useMemo(function () {
    return function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey,
          role = _ref2.role,
          onKeyDown = _ref2.onKeyDown,
          onFocus = _ref2.onFocus,
          onBlur = _ref2.onBlur,
          onClick = _ref2.onClick,
          onDragEnter = _ref2.onDragEnter,
          onDragOver = _ref2.onDragOver,
          onDragLeave = _ref2.onDragLeave,
          onDrop = _ref2.onDrop,
          rest = _objectWithoutProperties(_ref2, _excluded3);

      return _objectSpread(_objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "presentation"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = reactExports.useCallback(function (event) {
    event.stopPropagation();
  }, []);
  var getInputProps = reactExports.useMemo(function () {
    return function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey,
          onChange = _ref3.onChange,
          onClick = _ref3.onClick,
          rest = _objectWithoutProperties(_ref3, _excluded4);

      var inputProps = _defineProperty({
        accept: acceptAttr,
        multiple: multiple,
        type: "file",
        style: {
          border: 0,
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "0 -1px -1px 0",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);

      return _objectSpread(_objectSpread({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  return _objectSpread(_objectSpread({}, state), {}, {
    isFocused: isFocused && !disabled,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    rootRef: rootRef,
    inputRef: inputRef,
    open: composeHandler(openFileDialog)
  });
}
/**
 * @param {DropzoneState} state
 * @param {{type: string} & DropzoneState} action
 * @returns {DropzoneState}
 */

function reducer(state, action) {
  /* istanbul ignore next */
  switch (action.type) {
    case "focus":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: true
      });

    case "blur":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: false
      });

    case "openDialog":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        isFileDialogActive: true
      });

    case "closeDialog":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: false
      });

    case "setDraggedFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        isDragActive: action.isDragActive,
        isDragAccept: action.isDragAccept,
        isDragReject: action.isDragReject
      });

    case "setFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections,
        isDragReject: action.isDragReject
      });

    case "reset":
      return _objectSpread({}, initialState);

    default:
      return state;
  }
}

function noop() {}

/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */

var UserAgent_DEPRECATED_1;
var hasRequiredUserAgent_DEPRECATED;

function requireUserAgent_DEPRECATED () {
	if (hasRequiredUserAgent_DEPRECATED) return UserAgent_DEPRECATED_1;
	hasRequiredUserAgent_DEPRECATED = 1;
	/**
	 *  Provides entirely client-side User Agent and OS detection. You should prefer
	 *  the non-deprecated UserAgent module when possible, which exposes our
	 *  authoritative server-side PHP-based detection to the client.
	 *
	 *  Usage is straightforward:
	 *
	 *    if (UserAgent_DEPRECATED.ie()) {
	 *      //  IE
	 *    }
	 *
	 *  You can also do version checks:
	 *
	 *    if (UserAgent_DEPRECATED.ie() >= 7) {
	 *      //  IE7 or better
	 *    }
	 *
	 *  The browser functions will return NaN if the browser does not match, so
	 *  you can also do version compares the other way:
	 *
	 *    if (UserAgent_DEPRECATED.ie() < 7) {
	 *      //  IE6 or worse
	 *    }
	 *
	 *  Note that the version is a float and may include a minor version number,
	 *  so you should always use range operators to perform comparisons, not
	 *  strict equality.
	 *
	 *  **Note:** You should **strongly** prefer capability detection to browser
	 *  version detection where it's reasonable:
	 *
	 *    http://www.quirksmode.org/js/support.html
	 *
	 *  Further, we have a large number of mature wrapper functions and classes
	 *  which abstract away many browser irregularities. Check the documentation,
	 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
	 *  another copy of "event || window.event".
	 *
	 */

	var _populated = false;

	// Browsers
	var _ie, _firefox, _opera, _webkit, _chrome;

	// Actual IE browser for compatibility mode
	var _ie_real_version;

	// Platforms
	var _osx, _windows, _linux, _android;

	// Architectures
	var _win64;

	// Devices
	var _iphone, _ipad, _native;

	var _mobile;

	function _populate() {
	  if (_populated) {
	    return;
	  }

	  _populated = true;

	  // To work around buggy JS libraries that can't handle multi-digit
	  // version numbers, Opera 10's user agent string claims it's Opera
	  // 9, then later includes a Version/X.Y field:
	  //
	  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
	  var uas = navigator.userAgent;
	  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
	  var os    = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);

	  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
	  _ipad = /\b(iP[ao]d)/.exec(uas);
	  _android = /Android/i.exec(uas);
	  _native = /FBAN\/\w+;/i.exec(uas);
	  _mobile = /Mobile/i.exec(uas);

	  // Note that the IE team blog would have you believe you should be checking
	  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
	  // from either x64 or ia64;  so ultimately, you should just check for Win64
	  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
	  // Windows will send 'WOW64' instead.
	  _win64 = !!(/Win64/.exec(uas));

	  if (agent) {
	    _ie = agent[1] ? parseFloat(agent[1]) : (
	          agent[5] ? parseFloat(agent[5]) : NaN);
	    // IE compatibility mode
	    if (_ie && document && document.documentMode) {
	      _ie = document.documentMode;
	    }
	    // grab the "true" ie version from the trident token if available
	    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
	    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;

	    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
	    _opera   = agent[3] ? parseFloat(agent[3]) : NaN;
	    _webkit  = agent[4] ? parseFloat(agent[4]) : NaN;
	    if (_webkit) {
	      // We do not add the regexp to the above test, because it will always
	      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
	      // the userAgent string.
	      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
	      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
	    } else {
	      _chrome = NaN;
	    }
	  } else {
	    _ie = _firefox = _opera = _chrome = _webkit = NaN;
	  }

	  if (os) {
	    if (os[1]) {
	      // Detect OS X version.  If no version number matches, set _osx to true.
	      // Version examples:  10, 10_6_1, 10.7
	      // Parses version number as a float, taking only first two sets of
	      // digits.  If only one set of digits is found, returns just the major
	      // version number.
	      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);

	      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
	    } else {
	      _osx = false;
	    }
	    _windows = !!os[2];
	    _linux   = !!os[3];
	  } else {
	    _osx = _windows = _linux = false;
	  }
	}

	var UserAgent_DEPRECATED = {

	  /**
	   *  Check if the UA is Internet Explorer.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  ie: function() {
	    return _populate() || _ie;
	  },

	  /**
	   * Check if we're in Internet Explorer compatibility mode.
	   *
	   * @return bool true if in compatibility mode, false if
	   * not compatibility mode or not ie
	   */
	  ieCompatibilityMode: function() {
	    return _populate() || (_ie_real_version > _ie);
	  },


	  /**
	   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
	   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
	   * this when we don't need it -- tracked by #601957.
	   */
	  ie64: function() {
	    return UserAgent_DEPRECATED.ie() && _win64;
	  },

	  /**
	   *  Check if the UA is Firefox.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  firefox: function() {
	    return _populate() || _firefox;
	  },


	  /**
	   *  Check if the UA is Opera.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  opera: function() {
	    return _populate() || _opera;
	  },


	  /**
	   *  Check if the UA is WebKit.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  webkit: function() {
	    return _populate() || _webkit;
	  },

	  /**
	   *  For Push
	   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
	   */
	  safari: function() {
	    return UserAgent_DEPRECATED.webkit();
	  },

	  /**
	   *  Check if the UA is a Chrome browser.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  chrome : function() {
	    return _populate() || _chrome;
	  },


	  /**
	   *  Check if the user is running Windows.
	   *
	   *  @return bool `true' if the user's OS is Windows.
	   */
	  windows: function() {
	    return _populate() || _windows;
	  },


	  /**
	   *  Check if the user is running Mac OS X.
	   *
	   *  @return float|bool   Returns a float if a version number is detected,
	   *                       otherwise true/false.
	   */
	  osx: function() {
	    return _populate() || _osx;
	  },

	  /**
	   * Check if the user is running Linux.
	   *
	   * @return bool `true' if the user's OS is some flavor of Linux.
	   */
	  linux: function() {
	    return _populate() || _linux;
	  },

	  /**
	   * Check if the user is running on an iPhone or iPod platform.
	   *
	   * @return bool `true' if the user is running some flavor of the
	   *    iPhone OS.
	   */
	  iphone: function() {
	    return _populate() || _iphone;
	  },

	  mobile: function() {
	    return _populate() || (_iphone || _ipad || _android || _mobile);
	  },

	  nativeApp: function() {
	    // webviews inside of the native apps
	    return _populate() || _native;
	  },

	  android: function() {
	    return _populate() || _android;
	  },

	  ipad: function() {
	    return _populate() || _ipad;
	  }
	};

	UserAgent_DEPRECATED_1 = UserAgent_DEPRECATED;
	return UserAgent_DEPRECATED_1;
}

/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

var ExecutionEnvironment_1;
var hasRequiredExecutionEnvironment;

function requireExecutionEnvironment () {
	if (hasRequiredExecutionEnvironment) return ExecutionEnvironment_1;
	hasRequiredExecutionEnvironment = 1;

	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners:
	    canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	ExecutionEnvironment_1 = ExecutionEnvironment;
	return ExecutionEnvironment_1;
}

/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */

var isEventSupported_1;
var hasRequiredIsEventSupported;

function requireIsEventSupported () {
	if (hasRequiredIsEventSupported) return isEventSupported_1;
	hasRequiredIsEventSupported = 1;

	var ExecutionEnvironment = requireExecutionEnvironment();

	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature =
	    document.implementation &&
	    document.implementation.hasFeature &&
	    // always returns true in newer browsers as per the standard.
	    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	    document.implementation.hasFeature('', '') !== true;
	}

	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM ||
	      capture && !('addEventListener' in document)) {
	    return false;
	  }

	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = eventName in document;

	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }

	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }

	  return isSupported;
	}

	isEventSupported_1 = isEventSupported;
	return isEventSupported_1;
}

/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */

var normalizeWheel_1;
var hasRequiredNormalizeWheel$1;

function requireNormalizeWheel$1 () {
	if (hasRequiredNormalizeWheel$1) return normalizeWheel_1;
	hasRequiredNormalizeWheel$1 = 1;

	var UserAgent_DEPRECATED = requireUserAgent_DEPRECATED();

	var isEventSupported = requireIsEventSupported();


	// Reasonable defaults
	var PIXEL_STEP  = 10;
	var LINE_HEIGHT = 40;
	var PAGE_HEIGHT = 800;

	/**
	 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
	 * complicated, thus this doc is long and (hopefully) detailed enough to answer
	 * your questions.
	 *
	 * If you need to react to the mouse wheel in a predictable way, this code is
	 * like your bestest friend. * hugs *
	 *
	 * As of today, there are 4 DOM event types you can listen to:
	 *
	 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
	 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
	 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
	 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
	 *
	 * So what to do?  The is the best:
	 *
	 *   normalizeWheel.getEventType();
	 *
	 * In your event callback, use this code to get sane interpretation of the
	 * deltas.  This code will return an object with properties:
	 *
	 *   spinX   -- normalized spin speed (use for zoom) - x plane
	 *   spinY   -- " - y plane
	 *   pixelX  -- normalized distance (to pixels) - x plane
	 *   pixelY  -- " - y plane
	 *
	 * Wheel values are provided by the browser assuming you are using the wheel to
	 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
	 * significantly on different platforms and browsers, forgetting that you can
	 * scroll at different speeds.  Some devices (like trackpads) emit more events
	 * at smaller increments with fine granularity, and some emit massive jumps with
	 * linear speed or acceleration.
	 *
	 * This code does its best to normalize the deltas for you:
	 *
	 *   - spin is trying to normalize how far the wheel was spun (or trackpad
	 *     dragged).  This is super useful for zoom support where you want to
	 *     throw away the chunky scroll steps on the PC and make those equal to
	 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
	 *     resolve a single slow step on a wheel to 1.
	 *
	 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
	 *     get the crazy differences between browsers, but at least it'll be in
	 *     pixels!
	 *
	 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
	 *     should translate to positive value zooming IN, negative zooming OUT.
	 *     This matches the newer 'wheel' event.
	 *
	 * Why are there spinX, spinY (or pixels)?
	 *
	 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
	 *     with a mouse.  It results in side-scrolling in the browser by default.
	 *
	 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
	 *
	 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
	 *     probably is by browsers in conjunction with fancy 3D controllers .. but
	 *     you know.
	 *
	 * Implementation info:
	 *
	 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
	 * average mouse:
	 *
	 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
	 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
	 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
	 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
	 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
	 *
	 * On the trackpad:
	 *
	 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
	 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
	 *
	 * On other/older browsers.. it's more complicated as there can be multiple and
	 * also missing delta values.
	 *
	 * The 'wheel' event is more standard:
	 *
	 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
	 *
	 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
	 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
	 * backward compatibility with older events.  Those other values help us
	 * better normalize spin speed.  Example of what the browsers provide:
	 *
	 *                          | event.wheelDelta | event.detail
	 *        ------------------+------------------+--------------
	 *          Safari v5/OS X  |       -120       |       0
	 *          Safari v5/Win7  |       -120       |       0
	 *         Chrome v17/OS X  |       -120       |       0
	 *         Chrome v17/Win7  |       -120       |       0
	 *                IE9/Win7  |       -120       |   undefined
	 *         Firefox v4/OS X  |     undefined    |       1
	 *         Firefox v4/Win7  |     undefined    |       3
	 *
	 */
	function normalizeWheel(/*object*/ event) /*object*/ {
	  var sX = 0, sY = 0,       // spinX, spinY
	      pX = 0, pY = 0;       // pixelX, pixelY

	  // Legacy
	  if ('detail'      in event) { sY = event.detail; }
	  if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }
	  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
	  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

	  // side scrolling on FF with DOMMouseScroll
	  if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
	    sX = sY;
	    sY = 0;
	  }

	  pX = sX * PIXEL_STEP;
	  pY = sY * PIXEL_STEP;

	  if ('deltaY' in event) { pY = event.deltaY; }
	  if ('deltaX' in event) { pX = event.deltaX; }

	  if ((pX || pY) && event.deltaMode) {
	    if (event.deltaMode == 1) {          // delta in LINE units
	      pX *= LINE_HEIGHT;
	      pY *= LINE_HEIGHT;
	    } else {                             // delta in PAGE units
	      pX *= PAGE_HEIGHT;
	      pY *= PAGE_HEIGHT;
	    }
	  }

	  // Fall-back if spin cannot be determined
	  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
	  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }

	  return { spinX  : sX,
	           spinY  : sY,
	           pixelX : pX,
	           pixelY : pY };
	}


	/**
	 * The best combination if you prefer spinX + spinY normalization.  It favors
	 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
	 * 'wheel' event, making spin speed determination impossible.
	 */
	normalizeWheel.getEventType = function() /*string*/ {
	  return (UserAgent_DEPRECATED.firefox())
	           ? 'DOMMouseScroll'
	           : (isEventSupported('wheel'))
	               ? 'wheel'
	               : 'mousewheel';
	};

	normalizeWheel_1 = normalizeWheel;
	return normalizeWheel_1;
}

var normalizeWheel$1;
var hasRequiredNormalizeWheel;

function requireNormalizeWheel () {
	if (hasRequiredNormalizeWheel) return normalizeWheel$1;
	hasRequiredNormalizeWheel = 1;
	normalizeWheel$1 = requireNormalizeWheel$1();
	return normalizeWheel$1;
}

var normalizeWheelExports = requireNormalizeWheel();
const normalizeWheel = /*@__PURE__*/getDefaultExportFromCjs(normalizeWheelExports);

/**
 * Compute the dimension of the crop area based on media size,
 * aspect ratio and optionally rotation
 */
function getCropSize(mediaWidth, mediaHeight, containerWidth, containerHeight, aspect, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }
  var _a = rotateSize(mediaWidth, mediaHeight, rotation),
    width = _a.width,
    height = _a.height;
  var fittingWidth = Math.min(width, containerWidth);
  var fittingHeight = Math.min(height, containerHeight);
  if (fittingWidth > fittingHeight * aspect) {
    return {
      width: fittingHeight * aspect,
      height: fittingHeight
    };
  }
  return {
    width: fittingWidth,
    height: fittingWidth / aspect
  };
}
/**
 * Compute media zoom.
 * We fit the media into the container with "max-width: 100%; max-height: 100%;"
 */
function getMediaZoom(mediaSize) {
  // Take the axis with more pixels to improve accuracy
  return mediaSize.width > mediaSize.height ? mediaSize.width / mediaSize.naturalWidth : mediaSize.height / mediaSize.naturalHeight;
}
/**
 * Ensure a new media position stays in the crop area.
 */
function restrictPosition(position, mediaSize, cropSize, zoom, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }
  var _a = rotateSize(mediaSize.width, mediaSize.height, rotation),
    width = _a.width,
    height = _a.height;
  return {
    x: restrictPositionCoord(position.x, width, cropSize.width, zoom),
    y: restrictPositionCoord(position.y, height, cropSize.height, zoom)
  };
}
function restrictPositionCoord(position, mediaSize, cropSize, zoom) {
  var maxPosition = mediaSize * zoom / 2 - cropSize / 2;
  return clamp(position, -maxPosition, maxPosition);
}
function getDistanceBetweenPoints(pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
}
function getRotationBetweenPoints(pointA, pointB) {
  return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
}
/**
 * Compute the output cropped area of the media in percentages and pixels.
 * x/y are the top-left coordinates on the src media
 */
function computeCroppedArea(crop, mediaSize, cropSize, aspect, zoom, rotation, restrictPosition) {
  if (rotation === void 0) {
    rotation = 0;
  }
  if (restrictPosition === void 0) {
    restrictPosition = true;
  }
  // if the media is rotated by the user, we cannot limit the position anymore
  // as it might need to be negative.
  var limitAreaFn = restrictPosition ? limitArea : noOp;
  var mediaBBoxSize = rotateSize(mediaSize.width, mediaSize.height, rotation);
  var mediaNaturalBBoxSize = rotateSize(mediaSize.naturalWidth, mediaSize.naturalHeight, rotation);
  // calculate the crop area in percentages
  // in the rotated space
  var croppedAreaPercentages = {
    x: limitAreaFn(100, ((mediaBBoxSize.width - cropSize.width / zoom) / 2 - crop.x / zoom) / mediaBBoxSize.width * 100),
    y: limitAreaFn(100, ((mediaBBoxSize.height - cropSize.height / zoom) / 2 - crop.y / zoom) / mediaBBoxSize.height * 100),
    width: limitAreaFn(100, cropSize.width / mediaBBoxSize.width * 100 / zoom),
    height: limitAreaFn(100, cropSize.height / mediaBBoxSize.height * 100 / zoom)
  };
  // we compute the pixels size naively
  var widthInPixels = Math.round(limitAreaFn(mediaNaturalBBoxSize.width, croppedAreaPercentages.width * mediaNaturalBBoxSize.width / 100));
  var heightInPixels = Math.round(limitAreaFn(mediaNaturalBBoxSize.height, croppedAreaPercentages.height * mediaNaturalBBoxSize.height / 100));
  var isImgWiderThanHigh = mediaNaturalBBoxSize.width >= mediaNaturalBBoxSize.height * aspect;
  // then we ensure the width and height exactly match the aspect (to avoid rounding approximations)
  // if the media is wider than high, when zoom is 0, the crop height will be equals to image height
  // thus we want to compute the width from the height and aspect for accuracy.
  // Otherwise, we compute the height from width and aspect.
  var sizePixels = isImgWiderThanHigh ? {
    width: Math.round(heightInPixels * aspect),
    height: heightInPixels
  } : {
    width: widthInPixels,
    height: Math.round(widthInPixels / aspect)
  };
  var croppedAreaPixels = __assign(__assign({}, sizePixels), {
    x: Math.round(limitAreaFn(mediaNaturalBBoxSize.width - sizePixels.width, croppedAreaPercentages.x * mediaNaturalBBoxSize.width / 100)),
    y: Math.round(limitAreaFn(mediaNaturalBBoxSize.height - sizePixels.height, croppedAreaPercentages.y * mediaNaturalBBoxSize.height / 100))
  });
  return {
    croppedAreaPercentages: croppedAreaPercentages,
    croppedAreaPixels: croppedAreaPixels
  };
}
/**
 * Ensure the returned value is between 0 and max
 */
function limitArea(max, value) {
  return Math.min(max, Math.max(0, value));
}
function noOp(_max, value) {
  return value;
}
/**
 * Compute crop and zoom from the croppedAreaPercentages.
 */
function getInitialCropFromCroppedAreaPercentages(croppedAreaPercentages, mediaSize, rotation, cropSize, minZoom, maxZoom) {
  var mediaBBoxSize = rotateSize(mediaSize.width, mediaSize.height, rotation);
  // This is the inverse process of computeCroppedArea
  var zoom = clamp(cropSize.width / mediaBBoxSize.width * (100 / croppedAreaPercentages.width), minZoom, maxZoom);
  var crop = {
    x: zoom * mediaBBoxSize.width / 2 - cropSize.width / 2 - mediaBBoxSize.width * zoom * (croppedAreaPercentages.x / 100),
    y: zoom * mediaBBoxSize.height / 2 - cropSize.height / 2 - mediaBBoxSize.height * zoom * (croppedAreaPercentages.y / 100)
  };
  return {
    crop: crop,
    zoom: zoom
  };
}
/**
 * Compute zoom from the croppedAreaPixels
 */
function getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
  var mediaZoom = getMediaZoom(mediaSize);
  return cropSize.height > cropSize.width ? cropSize.height / (croppedAreaPixels.height * mediaZoom) : cropSize.width / (croppedAreaPixels.width * mediaZoom);
}
/**
 * Compute crop and zoom from the croppedAreaPixels
 */
function getInitialCropFromCroppedAreaPixels(croppedAreaPixels, mediaSize, rotation, cropSize, minZoom, maxZoom) {
  if (rotation === void 0) {
    rotation = 0;
  }
  var mediaNaturalBBoxSize = rotateSize(mediaSize.naturalWidth, mediaSize.naturalHeight, rotation);
  var zoom = clamp(getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize), minZoom, maxZoom);
  var cropZoom = cropSize.height > cropSize.width ? cropSize.height / croppedAreaPixels.height : cropSize.width / croppedAreaPixels.width;
  var crop = {
    x: ((mediaNaturalBBoxSize.width - croppedAreaPixels.width) / 2 - croppedAreaPixels.x) * cropZoom,
    y: ((mediaNaturalBBoxSize.height - croppedAreaPixels.height) / 2 - croppedAreaPixels.y) * cropZoom
  };
  return {
    crop: crop,
    zoom: zoom
  };
}
/**
 * Return the point that is the center of point a and b
 */
function getCenter(a, b) {
  return {
    x: (b.x + a.x) / 2,
    y: (b.y + a.y) / 2
  };
}
function getRadianAngle(degreeValue) {
  return degreeValue * Math.PI / 180;
}
/**
 * Returns the new bounding area of a rotated rectangle.
 */
function rotateSize(width, height, rotation) {
  var rotRad = getRadianAngle(rotation);
  return {
    width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height)
  };
}
/**
 * Clamp value between min and max
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
/**
 * Combine multiple class names into a single string.
 */
function classNames() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args.filter(function (value) {
    if (typeof value === 'string' && value.length > 0) {
      return true;
    }
    return false;
  }).join(' ').trim();
}

var css_248z = ".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n";

var MIN_ZOOM = 1;
var MAX_ZOOM = 3;
var KEYBOARD_STEP = 1;
var Cropper = /** @class */function (_super) {
  __extends(Cropper, _super);
  function Cropper() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.cropperRef = reactExports.createRef();
    _this.imageRef = reactExports.createRef();
    _this.videoRef = reactExports.createRef();
    _this.containerPosition = {
      x: 0,
      y: 0
    };
    _this.containerRef = null;
    _this.styleRef = null;
    _this.containerRect = null;
    _this.mediaSize = {
      width: 0,
      height: 0,
      naturalWidth: 0,
      naturalHeight: 0
    };
    _this.dragStartPosition = {
      x: 0,
      y: 0
    };
    _this.dragStartCrop = {
      x: 0,
      y: 0
    };
    _this.gestureZoomStart = 0;
    _this.gestureRotationStart = 0;
    _this.isTouching = false;
    _this.lastPinchDistance = 0;
    _this.lastPinchRotation = 0;
    _this.rafDragTimeout = null;
    _this.rafPinchTimeout = null;
    _this.wheelTimer = null;
    _this.currentDoc = typeof document !== 'undefined' ? document : null;
    _this.currentWindow = typeof window !== 'undefined' ? window : null;
    _this.resizeObserver = null;
    _this.state = {
      cropSize: null,
      hasWheelJustStarted: false,
      mediaObjectFit: undefined
    };
    _this.initResizeObserver = function () {
      if (typeof window.ResizeObserver === 'undefined' || !_this.containerRef) {
        return;
      }
      var isFirstResize = true;
      _this.resizeObserver = new window.ResizeObserver(function (entries) {
        if (isFirstResize) {
          isFirstResize = false; // observe() is called on mount, we don't want to trigger a recompute on mount
          return;
        }
        _this.computeSizes();
      });
      _this.resizeObserver.observe(_this.containerRef);
    };
    // this is to prevent Safari on iOS >= 10 to zoom the page
    _this.preventZoomSafari = function (e) {
      return e.preventDefault();
    };
    _this.cleanEvents = function () {
      if (!_this.currentDoc) return;
      _this.currentDoc.removeEventListener('mousemove', _this.onMouseMove);
      _this.currentDoc.removeEventListener('mouseup', _this.onDragStopped);
      _this.currentDoc.removeEventListener('touchmove', _this.onTouchMove);
      _this.currentDoc.removeEventListener('touchend', _this.onDragStopped);
      _this.currentDoc.removeEventListener('gesturemove', _this.onGestureMove);
      _this.currentDoc.removeEventListener('gestureend', _this.onGestureEnd);
      _this.currentDoc.removeEventListener('scroll', _this.onScroll);
    };
    _this.clearScrollEvent = function () {
      if (_this.containerRef) _this.containerRef.removeEventListener('wheel', _this.onWheel);
      if (_this.wheelTimer) {
        clearTimeout(_this.wheelTimer);
      }
    };
    _this.onMediaLoad = function () {
      var cropSize = _this.computeSizes();
      if (cropSize) {
        _this.emitCropData();
        _this.setInitialCrop(cropSize);
      }
      if (_this.props.onMediaLoaded) {
        _this.props.onMediaLoaded(_this.mediaSize);
      }
    };
    _this.setInitialCrop = function (cropSize) {
      if (_this.props.initialCroppedAreaPercentages) {
        var _a = getInitialCropFromCroppedAreaPercentages(_this.props.initialCroppedAreaPercentages, _this.mediaSize, _this.props.rotation, cropSize, _this.props.minZoom, _this.props.maxZoom),
          crop = _a.crop,
          zoom = _a.zoom;
        _this.props.onCropChange(crop);
        _this.props.onZoomChange && _this.props.onZoomChange(zoom);
      } else if (_this.props.initialCroppedAreaPixels) {
        var _b = getInitialCropFromCroppedAreaPixels(_this.props.initialCroppedAreaPixels, _this.mediaSize, _this.props.rotation, cropSize, _this.props.minZoom, _this.props.maxZoom),
          crop = _b.crop,
          zoom = _b.zoom;
        _this.props.onCropChange(crop);
        _this.props.onZoomChange && _this.props.onZoomChange(zoom);
      }
    };
    _this.computeSizes = function () {
      var _a, _b, _c, _d, _e, _f;
      var mediaRef = _this.imageRef.current || _this.videoRef.current;
      if (mediaRef && _this.containerRef) {
        _this.containerRect = _this.containerRef.getBoundingClientRect();
        _this.saveContainerPosition();
        var containerAspect = _this.containerRect.width / _this.containerRect.height;
        var naturalWidth = ((_a = _this.imageRef.current) === null || _a === void 0 ? void 0 : _a.naturalWidth) || ((_b = _this.videoRef.current) === null || _b === void 0 ? void 0 : _b.videoWidth) || 0;
        var naturalHeight = ((_c = _this.imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalHeight) || ((_d = _this.videoRef.current) === null || _d === void 0 ? void 0 : _d.videoHeight) || 0;
        var isMediaScaledDown = mediaRef.offsetWidth < naturalWidth || mediaRef.offsetHeight < naturalHeight;
        var mediaAspect = naturalWidth / naturalHeight;
        // We do not rely on the offsetWidth/offsetHeight if the media is scaled down
        // as the values they report are rounded. That will result in precision losses
        // when calculating zoom. We use the fact that the media is positionned relative
        // to the container. That allows us to use the container's dimensions
        // and natural aspect ratio of the media to calculate accurate media size.
        // However, for this to work, the container should not be rotated
        var renderedMediaSize = void 0;
        if (isMediaScaledDown) {
          switch (_this.state.mediaObjectFit) {
            default:
            case 'contain':
              renderedMediaSize = containerAspect > mediaAspect ? {
                width: _this.containerRect.height * mediaAspect,
                height: _this.containerRect.height
              } : {
                width: _this.containerRect.width,
                height: _this.containerRect.width / mediaAspect
              };
              break;
            case 'horizontal-cover':
              renderedMediaSize = {
                width: _this.containerRect.width,
                height: _this.containerRect.width / mediaAspect
              };
              break;
            case 'vertical-cover':
              renderedMediaSize = {
                width: _this.containerRect.height * mediaAspect,
                height: _this.containerRect.height
              };
              break;
          }
        } else {
          renderedMediaSize = {
            width: mediaRef.offsetWidth,
            height: mediaRef.offsetHeight
          };
        }
        _this.mediaSize = __assign(__assign({}, renderedMediaSize), {
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight
        });
        // set media size in the parent
        if (_this.props.setMediaSize) {
          _this.props.setMediaSize(_this.mediaSize);
        }
        var cropSize = _this.props.cropSize ? _this.props.cropSize : getCropSize(_this.mediaSize.width, _this.mediaSize.height, _this.containerRect.width, _this.containerRect.height, _this.props.aspect, _this.props.rotation);
        if (((_e = _this.state.cropSize) === null || _e === void 0 ? void 0 : _e.height) !== cropSize.height || ((_f = _this.state.cropSize) === null || _f === void 0 ? void 0 : _f.width) !== cropSize.width) {
          _this.props.onCropSizeChange && _this.props.onCropSizeChange(cropSize);
        }
        _this.setState({
          cropSize: cropSize
        }, _this.recomputeCropPosition);
        // pass crop size to parent
        if (_this.props.setCropSize) {
          _this.props.setCropSize(cropSize);
        }
        return cropSize;
      }
    };
    _this.saveContainerPosition = function () {
      if (_this.containerRef) {
        var bounds = _this.containerRef.getBoundingClientRect();
        _this.containerPosition = {
          x: bounds.left,
          y: bounds.top
        };
      }
    };
    _this.onMouseDown = function (e) {
      if (!_this.currentDoc) return;
      e.preventDefault();
      _this.currentDoc.addEventListener('mousemove', _this.onMouseMove);
      _this.currentDoc.addEventListener('mouseup', _this.onDragStopped);
      _this.saveContainerPosition();
      _this.onDragStart(Cropper.getMousePoint(e));
    };
    _this.onMouseMove = function (e) {
      return _this.onDrag(Cropper.getMousePoint(e));
    };
    _this.onScroll = function (e) {
      if (!_this.currentDoc) return;
      e.preventDefault();
      _this.saveContainerPosition();
    };
    _this.onTouchStart = function (e) {
      if (!_this.currentDoc) return;
      _this.isTouching = true;
      if (_this.props.onTouchRequest && !_this.props.onTouchRequest(e)) {
        return;
      }
      _this.currentDoc.addEventListener('touchmove', _this.onTouchMove, {
        passive: false
      }); // iOS 11 now defaults to passive: true
      _this.currentDoc.addEventListener('touchend', _this.onDragStopped);
      _this.saveContainerPosition();
      if (e.touches.length === 2) {
        _this.onPinchStart(e);
      } else if (e.touches.length === 1) {
        _this.onDragStart(Cropper.getTouchPoint(e.touches[0]));
      }
    };
    _this.onTouchMove = function (e) {
      // Prevent whole page from scrolling on iOS.
      e.preventDefault();
      if (e.touches.length === 2) {
        _this.onPinchMove(e);
      } else if (e.touches.length === 1) {
        _this.onDrag(Cropper.getTouchPoint(e.touches[0]));
      }
    };
    _this.onGestureStart = function (e) {
      if (!_this.currentDoc) return;
      e.preventDefault();
      _this.currentDoc.addEventListener('gesturechange', _this.onGestureMove);
      _this.currentDoc.addEventListener('gestureend', _this.onGestureEnd);
      _this.gestureZoomStart = _this.props.zoom;
      _this.gestureRotationStart = _this.props.rotation;
    };
    _this.onGestureMove = function (e) {
      e.preventDefault();
      if (_this.isTouching) {
        // this is to avoid conflict between gesture and touch events
        return;
      }
      var point = Cropper.getMousePoint(e);
      var newZoom = _this.gestureZoomStart - 1 + e.scale;
      _this.setNewZoom(newZoom, point, {
        shouldUpdatePosition: true
      });
      if (_this.props.onRotationChange) {
        var newRotation = _this.gestureRotationStart + e.rotation;
        _this.props.onRotationChange(newRotation);
      }
    };
    _this.onGestureEnd = function (e) {
      _this.cleanEvents();
    };
    _this.onDragStart = function (_a) {
      var _b, _c;
      var x = _a.x,
        y = _a.y;
      _this.dragStartPosition = {
        x: x,
        y: y
      };
      _this.dragStartCrop = __assign({}, _this.props.crop);
      (_c = (_b = _this.props).onInteractionStart) === null || _c === void 0 ? void 0 : _c.call(_b);
    };
    _this.onDrag = function (_a) {
      var x = _a.x,
        y = _a.y;
      if (!_this.currentWindow) return;
      if (_this.rafDragTimeout) _this.currentWindow.cancelAnimationFrame(_this.rafDragTimeout);
      _this.rafDragTimeout = _this.currentWindow.requestAnimationFrame(function () {
        if (!_this.state.cropSize) return;
        if (x === undefined || y === undefined) return;
        var offsetX = x - _this.dragStartPosition.x;
        var offsetY = y - _this.dragStartPosition.y;
        var requestedPosition = {
          x: _this.dragStartCrop.x + offsetX,
          y: _this.dragStartCrop.y + offsetY
        };
        var newPosition = _this.props.restrictPosition ? restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : requestedPosition;
        _this.props.onCropChange(newPosition);
      });
    };
    _this.onDragStopped = function () {
      var _a, _b;
      _this.isTouching = false;
      _this.cleanEvents();
      _this.emitCropData();
      (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    _this.onWheel = function (e) {
      if (!_this.currentWindow) return;
      if (_this.props.onWheelRequest && !_this.props.onWheelRequest(e)) {
        return;
      }
      e.preventDefault();
      var point = Cropper.getMousePoint(e);
      var pixelY = normalizeWheel(e).pixelY;
      var newZoom = _this.props.zoom - pixelY * _this.props.zoomSpeed / 200;
      _this.setNewZoom(newZoom, point, {
        shouldUpdatePosition: true
      });
      if (!_this.state.hasWheelJustStarted) {
        _this.setState({
          hasWheelJustStarted: true
        }, function () {
          var _a, _b;
          return (_b = (_a = _this.props).onInteractionStart) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }
      if (_this.wheelTimer) {
        clearTimeout(_this.wheelTimer);
      }
      _this.wheelTimer = _this.currentWindow.setTimeout(function () {
        return _this.setState({
          hasWheelJustStarted: false
        }, function () {
          var _a, _b;
          return (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }, 250);
    };
    _this.getPointOnContainer = function (_a, containerTopLeft) {
      var x = _a.x,
        y = _a.y;
      if (!_this.containerRect) {
        throw new Error('The Cropper is not mounted');
      }
      return {
        x: _this.containerRect.width / 2 - (x - containerTopLeft.x),
        y: _this.containerRect.height / 2 - (y - containerTopLeft.y)
      };
    };
    _this.getPointOnMedia = function (_a) {
      var x = _a.x,
        y = _a.y;
      var _b = _this.props,
        crop = _b.crop,
        zoom = _b.zoom;
      return {
        x: (x + crop.x) / zoom,
        y: (y + crop.y) / zoom
      };
    };
    _this.setNewZoom = function (zoom, point, _a) {
      var _b = _a === void 0 ? {} : _a,
        _c = _b.shouldUpdatePosition,
        shouldUpdatePosition = _c === void 0 ? true : _c;
      if (!_this.state.cropSize || !_this.props.onZoomChange) return;
      var newZoom = clamp(zoom, _this.props.minZoom, _this.props.maxZoom);
      if (shouldUpdatePosition) {
        var zoomPoint = _this.getPointOnContainer(point, _this.containerPosition);
        var zoomTarget = _this.getPointOnMedia(zoomPoint);
        var requestedPosition = {
          x: zoomTarget.x * newZoom - zoomPoint.x,
          y: zoomTarget.y * newZoom - zoomPoint.y
        };
        var newPosition = _this.props.restrictPosition ? restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, newZoom, _this.props.rotation) : requestedPosition;
        _this.props.onCropChange(newPosition);
      }
      _this.props.onZoomChange(newZoom);
    };
    _this.getCropData = function () {
      if (!_this.state.cropSize) {
        return null;
      }
      // this is to ensure the crop is correctly restricted after a zoom back (https://github.com/ValentinH/react-easy-crop/issues/6)
      var restrictedPosition = _this.props.restrictPosition ? restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;
      return computeCroppedArea(restrictedPosition, _this.mediaSize, _this.state.cropSize, _this.getAspect(), _this.props.zoom, _this.props.rotation, _this.props.restrictPosition);
    };
    _this.emitCropData = function () {
      var cropData = _this.getCropData();
      if (!cropData) return;
      var croppedAreaPercentages = cropData.croppedAreaPercentages,
        croppedAreaPixels = cropData.croppedAreaPixels;
      if (_this.props.onCropComplete) {
        _this.props.onCropComplete(croppedAreaPercentages, croppedAreaPixels);
      }
      if (_this.props.onCropAreaChange) {
        _this.props.onCropAreaChange(croppedAreaPercentages, croppedAreaPixels);
      }
    };
    _this.emitCropAreaChange = function () {
      var cropData = _this.getCropData();
      if (!cropData) return;
      var croppedAreaPercentages = cropData.croppedAreaPercentages,
        croppedAreaPixels = cropData.croppedAreaPixels;
      if (_this.props.onCropAreaChange) {
        _this.props.onCropAreaChange(croppedAreaPercentages, croppedAreaPixels);
      }
    };
    _this.recomputeCropPosition = function () {
      if (!_this.state.cropSize) return;
      var newPosition = _this.props.restrictPosition ? restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;
      _this.props.onCropChange(newPosition);
      _this.emitCropData();
    };
    _this.onKeyDown = function (event) {
      var _a, _b;
      var _c = _this.props,
        crop = _c.crop,
        onCropChange = _c.onCropChange,
        keyboardStep = _c.keyboardStep,
        zoom = _c.zoom,
        rotation = _c.rotation;
      var step = keyboardStep;
      if (!_this.state.cropSize) return;
      // if the shift key is pressed, reduce the step to allow finer control
      if (event.shiftKey) {
        step *= 0.2;
      }
      var newCrop = __assign({}, crop);
      switch (event.key) {
        case 'ArrowUp':
          newCrop.y -= step;
          event.preventDefault();
          break;
        case 'ArrowDown':
          newCrop.y += step;
          event.preventDefault();
          break;
        case 'ArrowLeft':
          newCrop.x -= step;
          event.preventDefault();
          break;
        case 'ArrowRight':
          newCrop.x += step;
          event.preventDefault();
          break;
        default:
          return;
      }
      if (_this.props.restrictPosition) {
        newCrop = restrictPosition(newCrop, _this.mediaSize, _this.state.cropSize, zoom, rotation);
      }
      if (!event.repeat) {
        (_b = (_a = _this.props).onInteractionStart) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      onCropChange(newCrop);
    };
    _this.onKeyUp = function (event) {
      var _a, _b;
      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          event.preventDefault();
          break;
        default:
          return;
      }
      _this.emitCropData();
      (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    return _this;
  }
  Cropper.prototype.componentDidMount = function () {
    if (!this.currentDoc || !this.currentWindow) return;
    if (this.containerRef) {
      if (this.containerRef.ownerDocument) {
        this.currentDoc = this.containerRef.ownerDocument;
      }
      if (this.currentDoc.defaultView) {
        this.currentWindow = this.currentDoc.defaultView;
      }
      this.initResizeObserver();
      // only add window resize listener if ResizeObserver is not supported. Otherwise, it would be redundant
      if (typeof window.ResizeObserver === 'undefined') {
        this.currentWindow.addEventListener('resize', this.computeSizes);
      }
      this.props.zoomWithScroll && this.containerRef.addEventListener('wheel', this.onWheel, {
        passive: false
      });
      this.containerRef.addEventListener('gesturestart', this.onGestureStart);
    }
    this.currentDoc.addEventListener('scroll', this.onScroll);
    if (!this.props.disableAutomaticStylesInjection) {
      this.styleRef = this.currentDoc.createElement('style');
      this.styleRef.setAttribute('type', 'text/css');
      if (this.props.nonce) {
        this.styleRef.setAttribute('nonce', this.props.nonce);
      }
      this.styleRef.innerHTML = css_248z;
      this.currentDoc.head.appendChild(this.styleRef);
    }
    // when rendered via SSR, the image can already be loaded and its onLoad callback will never be called
    if (this.imageRef.current && this.imageRef.current.complete) {
      this.onMediaLoad();
    }
    // set image and video refs in the parent if the callbacks exist
    if (this.props.setImageRef) {
      this.props.setImageRef(this.imageRef);
    }
    if (this.props.setVideoRef) {
      this.props.setVideoRef(this.videoRef);
    }
    if (this.props.setCropperRef) {
      this.props.setCropperRef(this.cropperRef);
    }
  };
  Cropper.prototype.componentWillUnmount = function () {
    var _a, _b;
    if (!this.currentDoc || !this.currentWindow) return;
    if (typeof window.ResizeObserver === 'undefined') {
      this.currentWindow.removeEventListener('resize', this.computeSizes);
    }
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    if (this.containerRef) {
      this.containerRef.removeEventListener('gesturestart', this.preventZoomSafari);
    }
    if (this.styleRef) {
      (_b = this.styleRef.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.styleRef);
    }
    this.cleanEvents();
    this.props.zoomWithScroll && this.clearScrollEvent();
  };
  Cropper.prototype.componentDidUpdate = function (prevProps) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (prevProps.rotation !== this.props.rotation) {
      this.computeSizes();
      this.recomputeCropPosition();
    } else if (prevProps.aspect !== this.props.aspect) {
      this.computeSizes();
    } else if (prevProps.objectFit !== this.props.objectFit) {
      this.computeSizes();
    } else if (prevProps.zoom !== this.props.zoom) {
      this.recomputeCropPosition();
    } else if (((_a = prevProps.cropSize) === null || _a === void 0 ? void 0 : _a.height) !== ((_b = this.props.cropSize) === null || _b === void 0 ? void 0 : _b.height) || ((_c = prevProps.cropSize) === null || _c === void 0 ? void 0 : _c.width) !== ((_d = this.props.cropSize) === null || _d === void 0 ? void 0 : _d.width)) {
      this.computeSizes();
    } else if (((_e = prevProps.crop) === null || _e === void 0 ? void 0 : _e.x) !== ((_f = this.props.crop) === null || _f === void 0 ? void 0 : _f.x) || ((_g = prevProps.crop) === null || _g === void 0 ? void 0 : _g.y) !== ((_h = this.props.crop) === null || _h === void 0 ? void 0 : _h.y)) {
      this.emitCropAreaChange();
    }
    if (prevProps.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef) {
      this.props.zoomWithScroll ? this.containerRef.addEventListener('wheel', this.onWheel, {
        passive: false
      }) : this.clearScrollEvent();
    }
    if (prevProps.video !== this.props.video) {
      (_j = this.videoRef.current) === null || _j === void 0 ? void 0 : _j.load();
    }
    var objectFit = this.getObjectFit();
    if (objectFit !== this.state.mediaObjectFit) {
      this.setState({
        mediaObjectFit: objectFit
      }, this.computeSizes);
    }
  };
  Cropper.prototype.getAspect = function () {
    var _a = this.props,
      cropSize = _a.cropSize,
      aspect = _a.aspect;
    if (cropSize) {
      return cropSize.width / cropSize.height;
    }
    return aspect;
  };
  Cropper.prototype.getObjectFit = function () {
    var _a, _b, _c, _d;
    if (this.props.objectFit === 'cover') {
      var mediaRef = this.imageRef.current || this.videoRef.current;
      if (mediaRef && this.containerRef) {
        this.containerRect = this.containerRef.getBoundingClientRect();
        var containerAspect = this.containerRect.width / this.containerRect.height;
        var naturalWidth = ((_a = this.imageRef.current) === null || _a === void 0 ? void 0 : _a.naturalWidth) || ((_b = this.videoRef.current) === null || _b === void 0 ? void 0 : _b.videoWidth) || 0;
        var naturalHeight = ((_c = this.imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalHeight) || ((_d = this.videoRef.current) === null || _d === void 0 ? void 0 : _d.videoHeight) || 0;
        var mediaAspect = naturalWidth / naturalHeight;
        return mediaAspect < containerAspect ? 'horizontal-cover' : 'vertical-cover';
      }
      return 'horizontal-cover';
    }
    return this.props.objectFit;
  };
  Cropper.prototype.onPinchStart = function (e) {
    var pointA = Cropper.getTouchPoint(e.touches[0]);
    var pointB = Cropper.getTouchPoint(e.touches[1]);
    this.lastPinchDistance = getDistanceBetweenPoints(pointA, pointB);
    this.lastPinchRotation = getRotationBetweenPoints(pointA, pointB);
    this.onDragStart(getCenter(pointA, pointB));
  };
  Cropper.prototype.onPinchMove = function (e) {
    var _this = this;
    if (!this.currentDoc || !this.currentWindow) return;
    var pointA = Cropper.getTouchPoint(e.touches[0]);
    var pointB = Cropper.getTouchPoint(e.touches[1]);
    var center = getCenter(pointA, pointB);
    this.onDrag(center);
    if (this.rafPinchTimeout) this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout);
    this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function () {
      var distance = getDistanceBetweenPoints(pointA, pointB);
      var newZoom = _this.props.zoom * (distance / _this.lastPinchDistance);
      _this.setNewZoom(newZoom, center, {
        shouldUpdatePosition: false
      });
      _this.lastPinchDistance = distance;
      var rotation = getRotationBetweenPoints(pointA, pointB);
      var newRotation = _this.props.rotation + (rotation - _this.lastPinchRotation);
      _this.props.onRotationChange && _this.props.onRotationChange(newRotation);
      _this.lastPinchRotation = rotation;
    });
  };
  Cropper.prototype.render = function () {
    var _this = this;
    var _a;
    var _b = this.props,
      image = _b.image,
      video = _b.video,
      mediaProps = _b.mediaProps,
      cropperProps = _b.cropperProps,
      transform = _b.transform,
      _c = _b.crop,
      x = _c.x,
      y = _c.y,
      rotation = _b.rotation,
      zoom = _b.zoom,
      cropShape = _b.cropShape,
      showGrid = _b.showGrid,
      _d = _b.style,
      containerStyle = _d.containerStyle,
      cropAreaStyle = _d.cropAreaStyle,
      mediaStyle = _d.mediaStyle,
      _e = _b.classes,
      containerClassName = _e.containerClassName,
      cropAreaClassName = _e.cropAreaClassName,
      mediaClassName = _e.mediaClassName;
    var objectFit = (_a = this.state.mediaObjectFit) !== null && _a !== void 0 ? _a : this.getObjectFit();
    return reactExports.createElement("div", {
      onMouseDown: this.onMouseDown,
      onTouchStart: this.onTouchStart,
      ref: function ref(el) {
        return _this.containerRef = el;
      },
      "data-testid": "container",
      style: containerStyle,
      className: classNames('reactEasyCrop_Container', containerClassName)
    }, image ? reactExports.createElement("img", __assign({
      alt: "",
      className: classNames('reactEasyCrop_Image', objectFit === 'contain' && 'reactEasyCrop_Contain', objectFit === 'horizontal-cover' && 'reactEasyCrop_Cover_Horizontal', objectFit === 'vertical-cover' && 'reactEasyCrop_Cover_Vertical', mediaClassName)
    }, mediaProps, {
      src: image,
      ref: this.imageRef,
      style: __assign(__assign({}, mediaStyle), {
        transform: transform || "translate(".concat(x, "px, ").concat(y, "px) rotate(").concat(rotation, "deg) scale(").concat(zoom, ")")
      }),
      onLoad: this.onMediaLoad
    })) : video && reactExports.createElement("video", __assign({
      autoPlay: true,
      playsInline: true,
      loop: true,
      muted: true,
      className: classNames('reactEasyCrop_Video', objectFit === 'contain' && 'reactEasyCrop_Contain', objectFit === 'horizontal-cover' && 'reactEasyCrop_Cover_Horizontal', objectFit === 'vertical-cover' && 'reactEasyCrop_Cover_Vertical', mediaClassName)
    }, mediaProps, {
      ref: this.videoRef,
      onLoadedMetadata: this.onMediaLoad,
      style: __assign(__assign({}, mediaStyle), {
        transform: transform || "translate(".concat(x, "px, ").concat(y, "px) rotate(").concat(rotation, "deg) scale(").concat(zoom, ")")
      }),
      controls: false
    }), (Array.isArray(video) ? video : [{
      src: video
    }]).map(function (item) {
      return reactExports.createElement("source", __assign({
        key: item.src
      }, item));
    })), this.state.cropSize && reactExports.createElement("div", __assign({
      ref: this.cropperRef,
      style: __assign(__assign({}, cropAreaStyle), {
        width: this.state.cropSize.width,
        height: this.state.cropSize.height
      }),
      tabIndex: 0,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
      "data-testid": "cropper",
      className: classNames('reactEasyCrop_CropArea', cropShape === 'round' && 'reactEasyCrop_CropAreaRound', showGrid && 'reactEasyCrop_CropAreaGrid', cropAreaClassName)
    }, cropperProps)));
  };
  Cropper.defaultProps = {
    zoom: 1,
    rotation: 0,
    aspect: 4 / 3,
    maxZoom: MAX_ZOOM,
    minZoom: MIN_ZOOM,
    cropShape: 'rect',
    objectFit: 'contain',
    showGrid: true,
    style: {},
    classes: {},
    mediaProps: {},
    cropperProps: {},
    zoomSpeed: 1,
    restrictPosition: true,
    zoomWithScroll: true,
    keyboardStep: KEYBOARD_STEP
  };
  Cropper.getMousePoint = function (e) {
    return {
      x: Number(e.clientX),
      y: Number(e.clientY)
    };
  };
  Cropper.getTouchPoint = function (touch) {
    return {
      x: Number(touch.clientX),
      y: Number(touch.clientY)
    };
  };
  return Cropper;
}(reactExports.Component);

var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var BACK_KEYS = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
};
var SLIDER_NAME = "Slider";
var [Collection, useCollection, createCollectionScope] = createCollection(SLIDER_NAME);
var [createSliderContext, createSliderScope] = createContextScope(SLIDER_NAME, [
  createCollectionScope
]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      name,
      min = 0,
      max = 100,
      step = 1,
      orientation = "horizontal",
      disabled = false,
      minStepsBetweenThumbs = 0,
      defaultValue = [min],
      value,
      onValueChange = () => {
      },
      onValueCommit = () => {
      },
      inverted = false,
      form,
      ...sliderProps
    } = props;
    const thumbRefs = reactExports.useRef(/* @__PURE__ */ new Set());
    const valueIndexToChangeRef = reactExports.useRef(0);
    const isHorizontal = orientation === "horizontal";
    const SliderOrientation = isHorizontal ? SliderHorizontal : SliderVertical;
    const [values = [], setValues] = useControllableState({
      prop: value,
      defaultProp: defaultValue,
      onChange: (value2) => {
        const thumbs = [...thumbRefs.current];
        thumbs[valueIndexToChangeRef.current]?.focus();
        onValueChange(value2);
      }
    });
    const valuesBeforeSlideStartRef = reactExports.useRef(values);
    function handleSlideStart(value2) {
      const closestIndex = getClosestValueIndex(values, value2);
      updateValues(value2, closestIndex);
    }
    function handleSlideMove(value2) {
      updateValues(value2, valueIndexToChangeRef.current);
    }
    function handleSlideEnd() {
      const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
      const nextValue = values[valueIndexToChangeRef.current];
      const hasChanged = nextValue !== prevValue;
      if (hasChanged) onValueCommit(values);
    }
    function updateValues(value2, atIndex, { commit } = { commit: false }) {
      const decimalCount = getDecimalCount(step);
      const snapToStep = roundValue(Math.round((value2 - min) / step) * step + min, decimalCount);
      const nextValue = clamp$1(snapToStep, [min, max]);
      setValues((prevValues = []) => {
        const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
        if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
          valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
          const hasChanged = String(nextValues) !== String(prevValues);
          if (hasChanged && commit) onValueCommit(nextValues);
          return hasChanged ? nextValues : prevValues;
        } else {
          return prevValues;
        }
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderProvider,
      {
        scope: props.__scopeSlider,
        name,
        disabled,
        min,
        max,
        valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values,
        orientation,
        form,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SliderOrientation,
          {
            "aria-disabled": disabled,
            "data-disabled": disabled ? "" : void 0,
            ...sliderProps,
            ref: forwardedRef,
            onPointerDown: composeEventHandlers$1(sliderProps.onPointerDown, () => {
              if (!disabled) valuesBeforeSlideStartRef.current = values;
            }),
            min,
            max,
            inverted,
            onSlideStart: disabled ? void 0 : handleSlideStart,
            onSlideMove: disabled ? void 0 : handleSlideMove,
            onSlideEnd: disabled ? void 0 : handleSlideEnd,
            onHomeKeyDown: () => !disabled && updateValues(min, 0, { commit: true }),
            onEndKeyDown: () => !disabled && updateValues(max, values.length - 1, { commit: true }),
            onStepKeyDown: ({ event, direction: stepDirection }) => {
              if (!disabled) {
                const isPageKey = PAGE_KEYS.includes(event.key);
                const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS.includes(event.key);
                const multiplier = isSkipKey ? 10 : 1;
                const atIndex = valueIndexToChangeRef.current;
                const value2 = values[atIndex];
                const stepInDirection = step * multiplier * stepDirection;
                updateValues(value2 + stepInDirection, atIndex, { commit: true });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Slider$1.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
});
var SliderHorizontal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      min,
      max,
      dir,
      inverted,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const [slider, setSlider] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setSlider(node));
    const rectRef = reactExports.useRef(void 0);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
    function getValueFromPointer(pointerPosition) {
      const rect = rectRef.current || slider.getBoundingClientRect();
      const input = [0, rect.width];
      const output = isSlidingFromLeft ? [min, max] : [max, min];
      const value = linearScale(input, output);
      rectRef.current = rect;
      return value(pointerPosition - rect.left);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromLeft ? "left" : "right",
        endEdge: isSlidingFromLeft ? "right" : "left",
        direction: isSlidingFromLeft ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SliderImpl,
          {
            dir: direction,
            "data-orientation": "horizontal",
            ...sliderProps,
            ref: composedRefs,
            style: {
              ...sliderProps.style,
              ["--radix-slider-thumb-transform"]: "translateX(-50%)"
            },
            onSlideStart: (event) => {
              const value = getValueFromPointer(event.clientX);
              onSlideStart?.(value);
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.clientX);
              onSlideMove?.(value);
            },
            onSlideEnd: () => {
              rectRef.current = void 0;
              onSlideEnd?.();
            },
            onStepKeyDown: (event) => {
              const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
              const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
              onStepKeyDown?.({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var SliderVertical = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      min,
      max,
      inverted,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const sliderRef = reactExports.useRef(null);
    const ref = useComposedRefs(forwardedRef, sliderRef);
    const rectRef = reactExports.useRef(void 0);
    const isSlidingFromBottom = !inverted;
    function getValueFromPointer(pointerPosition) {
      const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
      const input = [0, rect.height];
      const output = isSlidingFromBottom ? [max, min] : [min, max];
      const value = linearScale(input, output);
      rectRef.current = rect;
      return value(pointerPosition - rect.top);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromBottom ? "bottom" : "top",
        endEdge: isSlidingFromBottom ? "top" : "bottom",
        size: "height",
        direction: isSlidingFromBottom ? 1 : -1,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SliderImpl,
          {
            "data-orientation": "vertical",
            ...sliderProps,
            ref,
            style: {
              ...sliderProps.style,
              ["--radix-slider-thumb-transform"]: "translateY(50%)"
            },
            onSlideStart: (event) => {
              const value = getValueFromPointer(event.clientY);
              onSlideStart?.(value);
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.clientY);
              onSlideMove?.(value);
            },
            onSlideEnd: () => {
              rectRef.current = void 0;
              onSlideEnd?.();
            },
            onStepKeyDown: (event) => {
              const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
              const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
              onStepKeyDown?.({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var SliderImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSlider,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onHomeKeyDown,
      onEndKeyDown,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const context = useSliderContext(SLIDER_NAME, __scopeSlider);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        ...sliderProps,
        ref: forwardedRef,
        onKeyDown: composeEventHandlers$1(props.onKeyDown, (event) => {
          if (event.key === "Home") {
            onHomeKeyDown(event);
            event.preventDefault();
          } else if (event.key === "End") {
            onEndKeyDown(event);
            event.preventDefault();
          } else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
            onStepKeyDown(event);
            event.preventDefault();
          }
        }),
        onPointerDown: composeEventHandlers$1(props.onPointerDown, (event) => {
          const target = event.target;
          target.setPointerCapture(event.pointerId);
          event.preventDefault();
          if (context.thumbs.has(target)) {
            target.focus();
          } else {
            onSlideStart(event);
          }
        }),
        onPointerMove: composeEventHandlers$1(props.onPointerMove, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) onSlideMove(event);
        }),
        onPointerUp: composeEventHandlers$1(props.onPointerUp, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) {
            target.releasePointerCapture(event.pointerId);
            onSlideEnd(event);
          }
        })
      }
    );
  }
);
var TRACK_NAME = "SliderTrack";
var SliderTrack = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...trackProps } = props;
    const context = useSliderContext(TRACK_NAME, __scopeSlider);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-disabled": context.disabled ? "" : void 0,
        "data-orientation": context.orientation,
        ...trackProps,
        ref: forwardedRef
      }
    );
  }
);
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...rangeProps } = props;
    const context = useSliderContext(RANGE_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map(
      (value) => convertValueToPercentage(value, context.min, context.max)
    );
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        ...rangeProps,
        ref: composedRefs,
        style: {
          ...props.style,
          [orientation.startEdge]: offsetStart + "%",
          [orientation.endEdge]: offsetEnd + "%"
        }
      }
    );
  }
);
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb";
var SliderThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const getItems = useCollection(props.__scopeSlider);
    const [thumb, setThumb] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const index = reactExports.useMemo(
      () => thumb ? getItems().findIndex((item) => item.ref.current === thumb) : -1,
      [getItems, thumb]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SliderThumbImpl, { ...props, ref: composedRefs, index });
  }
);
var SliderThumbImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, index, name, ...thumbProps } = props;
    const context = useSliderContext(THUMB_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(THUMB_NAME, __scopeSlider);
    const [thumb, setThumb] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const isFormControl = thumb ? context.form || !!thumb.closest("form") : true;
    const size = useSize(thumb);
    const value = context.values[index];
    const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
    const label = getLabel(index, context.values.length);
    const orientationSize = size?.[orientation.size];
    const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
    reactExports.useEffect(() => {
      if (thumb) {
        context.thumbs.add(thumb);
        return () => {
          context.thumbs.delete(thumb);
        };
      }
    }, [thumb, context.thumbs]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.span,
            {
              role: "slider",
              "aria-label": props["aria-label"] || label,
              "aria-valuemin": context.min,
              "aria-valuenow": value,
              "aria-valuemax": context.max,
              "aria-orientation": context.orientation,
              "data-orientation": context.orientation,
              "data-disabled": context.disabled ? "" : void 0,
              tabIndex: context.disabled ? void 0 : 0,
              ...thumbProps,
              ref: composedRefs,
              style: value === void 0 ? { display: "none" } : props.style,
              onFocus: composeEventHandlers$1(props.onFocus, () => {
                context.valueIndexToChangeRef.current = index;
              })
            }
          ) }),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            BubbleInput,
            {
              name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0),
              form: context.form,
              value
            },
            index
          )
        ]
      }
    );
  }
);
SliderThumb.displayName = THUMB_NAME;
var BubbleInput = (props) => {
  const { value, ...inputProps } = props;
  const ref = reactExports.useRef(null);
  const prevValue = usePrevious(value);
  reactExports.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("input", { bubbles: true });
      setValue.call(input, value);
      input.dispatchEvent(event);
    }
  }, [prevValue, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("input", { style: { display: "none" }, ...inputProps, ref, defaultValue: value });
};
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
  const nextValues = [...prevValues];
  nextValues[atIndex] = nextValue;
  return nextValues.sort((a, b) => a - b);
}
function convertValueToPercentage(value, min, max) {
  const maxSteps = max - min;
  const percentPerStep = 100 / maxSteps;
  const percentage = percentPerStep * (value - min);
  return clamp$1(percentage, [0, 100]);
}
function getLabel(index, totalValues) {
  if (totalValues > 2) {
    return `Value ${index + 1} of ${totalValues}`;
  } else if (totalValues === 2) {
    return ["Minimum", "Maximum"][index];
  } else {
    return void 0;
  }
}
function getClosestValueIndex(values, nextValue) {
  if (values.length === 1) return 0;
  const distances = values.map((value) => Math.abs(value - nextValue));
  const closestDistance = Math.min(...distances);
  return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
  const halfWidth = width / 2;
  const halfPercent = 50;
  const offset = linearScale([0, halfPercent], [0, halfWidth]);
  return (halfWidth - offset(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
  return values.slice(0, -1).map((value, index) => values[index + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = getStepsBetweenValues(values);
    const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
    return actualMinStepsBetweenValues >= minStepsBetweenValues;
  }
  return true;
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function getDecimalCount(value) {
  return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
  const rounder = Math.pow(10, decimalCount);
  return Math.round(value * rounder) / rounder;
}
var Root = Slider$1;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb = SliderThumb;

const Slider = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = Root.displayName;

function ImageUpload({ onChange, defaultImage, ratio = 1, disabled = false }) {
  const [preview, setPreview] = reactExports.useState(defaultImage || null);
  const [crop, setCrop] = reactExports.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = reactExports.useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = reactExports.useState(null);
  const [isCropperOpen, setIsCropperOpen] = reactExports.useState(false);
  const onDrop = reactExports.useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
        setIsCropperOpen(true);
      };
      reader.readAsDataURL(file);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
    disabled
  });
  const onCropComplete = reactExports.useCallback((_croppedArea, croppedAreaPixels2) => {
    setCroppedAreaPixels(croppedAreaPixels2);
  }, []);
  const createImage = (url) => new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", reject);
    image.src = url;
  });
  const getCroppedImage = async (imageSrc, pixelCrop) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], `avatar-${Date.now()}.jpg`, { type: "image/jpeg" });
          resolve(file);
        }
      }, "image/jpeg");
    });
  };
  const handleCropConfirm = async () => {
    if (preview && croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImage(preview, croppedAreaPixels);
        onChange(croppedImage);
        setIsCropperOpen(false);
      } catch (e) {
        console.error(e);
      }
    }
  };
  const handleRemove = () => {
    setPreview(null);
    onChange(new File([], ""));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ...getRootProps(),
        className: `relative aspect-square overflow-hidden rounded-full border-2 border-dashed transition-colors ${isDragActive ? "border-primary bg-primary/10" : "border-muted-foreground/25"} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:border-muted-foreground/50"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...getInputProps() }),
          preview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: preview || "/placeholder.svg", alt: "Preview", className: "h-full w-full object-cover" }),
            !disabled && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "secondary",
                size: "icon",
                className: "h-8 w-8",
                onClick: (e) => {
                  e.stopPropagation();
                  handleRemove();
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            ) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col items-center justify-center gap-1 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-8 w-8 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: isDragActive ? "Drop the image here" : "Upload an image" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isCropperOpen, onOpenChange: setIsCropperOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[300px]", children: preview && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Cropper,
        {
          image: preview,
          crop,
          zoom,
          aspect: ratio,
          onCropChange: setCrop,
          onCropComplete,
          onZoomChange: setZoom
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Zoom" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { value: [zoom], min: 1, max: 3, step: 0.1, onValueChange: (value) => setZoom(value[0]) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: () => setIsCropperOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", onClick: handleCropConfirm, children: "Crop & Save" })
      ] })
    ] }) })
  ] });
}

const UserProfile = () => {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [userData, setUserData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = reactExports.useState(null);
  const [provinces, setProvinces] = reactExports.useState([]);
  const [districts, setDistricts] = reactExports.useState([]);
  const [selectedProvince, setSelectedProvince] = reactExports.useState("");
  const [selectedDistrict, setSelectedDistrict] = reactExports.useState("");
  const [homeAddress, setHomeAddress] = reactExports.useState("");
  const [dateOfBirth, setDateOfBirth] = reactExports.useState(void 0);
  reactExports.useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
        setDateOfBirth(new Date(data.dateOfBirth));
        const addressParts = data.address.split(", ");
        if (addressParts.length >= 3) {
          setHomeAddress(addressParts[0]);
          const provincesResponse = await fetch("https://provinces.open-api.vn/api/p/");
          const provincesData = await provincesResponse.json();
          setProvinces(provincesData);
          const province = provincesData.find((p) => p.name === addressParts[2]);
          if (province) {
            setSelectedProvince(province.code);
            const districtsResponse = await fetch(`https://provinces.open-api.vn/api/p/${province.code}?depth=2`);
            const districtData = await districtsResponse.json();
            setDistricts(districtData.districts);
            const district = districtData.districts.find((d) => d.name === addressParts[1]);
            if (district) {
              setSelectedDistrict(district.code);
            }
          }
        } else {
          setHomeAddress(data.address);
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch user data. Please try again.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    loadUserData();
    fetchProvinces();
  }, [toast]);
  reactExports.useEffect(() => {
    if (selectedProvince) {
      fetchDistricts(selectedProvince);
    }
  }, [selectedProvince]);
  const fetchProvinces = async () => {
    try {
      const response = await fetch("https://provinces.open-api.vn/api/p/");
      const data = await response.json();
      setProvinces(data);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };
  const fetchDistricts = async (provinceCode) => {
    try {
      const response = await fetch(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
      const data = await response.json();
      setDistricts(data.districts);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };
  const handleSave = async () => {
    if (userData && dateOfBirth) {
      const selectedProvinceData = provinces.find((p) => p.code === selectedProvince);
      const selectedDistrictData = districts.find((d) => d.code === selectedDistrict);
      const fullAddress = `${homeAddress}, ${selectedDistrictData?.name || ""}, ${selectedProvinceData?.name || ""}`;
      const updatedUserData = {
        fullName: userData.fullName,
        email: userData.email,
        gender: userData.gender,
        address: fullAddress,
        dateOfBirth: dateOfBirth.toISOString(),
        phoneNumber: userData.phoneNumber,
        ...selectedImage && { image: selectedImage }
      };
      try {
        const response = await updateUserProfile(updatedUserData);
        setUserData(response);
        setSelectedImage(null);
        setIsEditing(false);
        toast({
          title: "Success",
          description: "User profile updated successfully.",
          variant: "success"
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to update user profile. Please try again.",
          variant: "destructive"
        });
      }
    }
  };
  const handleInputChange = (field, value) => {
    if (userData) {
      setUserData({ ...userData, [field]: value });
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, { text: "Please wait, we are cooking..." });
  }
  if (!userData) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "No user data available." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-bold", children: "User Profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => setIsEditing(!isEditing), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4 mr-2" }),
        isEditing ? "Cancel" : "Edit"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageUpload,
          {
            onChange: async (file) => {
              if (userData) {
                if (isEditing) {
                  setSelectedImage(file);
                  toast({
                    title: "Success",
                    description: "Image selected. Click Save to update your profile.",
                    variant: "success"
                  });
                } else {
                  try {
                    const response = await updateUserProfile({ image: file });
                    setUserData(response);
                    toast({
                      title: "Success",
                      description: "Profile picture updated successfully.",
                      variant: "success"
                    });
                  } catch (error) {
                    toast({
                      title: "Error",
                      description: "Failed to update profile picture. Please try again.",
                      variant: "destructive"
                    });
                  }
                }
              }
            },
            defaultImage: userData?.imageUrl || like,
            disabled: !isEditing
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: userData.fullName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: userData.roleName })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "fullName", className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Full Name" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "fullName",
                value: userData.fullName,
                onChange: (e) => handleInputChange("fullName", e.target.value),
                disabled: !isEditing,
                className: "bg-transparent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "email", className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Email" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "email",
                type: "email",
                value: userData.email,
                onChange: (e) => handleInputChange("email", e.target.value),
                disabled: !isEditing,
                className: "bg-transparent"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "phoneNumber", className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Phone Number" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "phoneNumber",
                value: userData.phoneNumber,
                onChange: (e) => handleInputChange("phoneNumber", e.target.value),
                disabled: !isEditing,
                className: "bg-transparent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "gender", className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Gender" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                disabled: !isEditing,
                value: userData.gender ? "true" : "false",
                onValueChange: (value) => handleInputChange("gender", value === "true"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { children: userData.gender ? "Male" : "Female" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "true", children: "Male" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "false", children: "Female" })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "dateOfBirth", className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Date of Birth" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { date: dateOfBirth, setDate: setDateOfBirth, disabled: !isEditing })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "address", className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Address" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                disabled: !isEditing,
                value: selectedProvince,
                onValueChange: (value) => {
                  setSelectedProvince(value);
                  setSelectedDistrict("");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Province" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: provinces.map((province) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: province.code, children: province.name }, province.code)) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                disabled: !isEditing || !selectedProvince,
                value: selectedDistrict,
                onValueChange: setSelectedDistrict,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "District" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: districts.map((district) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: district.code, children: district.name }, district.code)) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "homeAddress",
                value: homeAddress,
                onChange: (e) => setHomeAddress(e.target.value),
                disabled: !isEditing,
                className: "bg-transparent",
                placeholder: "Street Address"
              }
            )
          ] })
        ] }),
        isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSave, className: "bg-blue-600 hover:bg-blue-700", children: "Save changes" }) })
      ] })
    ] })
  ] });
};

const UserDashboard = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserProfile, {}) });
};

export { UserDashboard as default };
