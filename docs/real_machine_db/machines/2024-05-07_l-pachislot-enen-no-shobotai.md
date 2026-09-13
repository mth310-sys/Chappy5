# Lパチスロ 炎炎ノ消防隊

recordNo: 1647
machineName: Lパチスロ 炎炎ノ消防隊
aliases: L炎炎ノ消防隊 / スマスロ炎炎ノ消防隊 / L炎炎ノ消防隊jG
manufacturer: SANKYO（ジェイビー系）
formalModel: L炎炎ノ消防隊jG
inspectionCode: 330569
releaseDate: 2024-05-07
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス + 炎炎激闘
settings: 1 / 2 / 4 / 5 / 6（設定3なし、設定Lあり）
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- パチビー、HAZUSE、K-Navi、ニコナナの導入告知が2024-05-07で一致。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_DATE_MATCH

## modelEvidence
- HAZUSEで型式名 `L炎炎ノ消防隊jG`、検定番号 `330569` を確認。
confidence: ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 99.2%
- setting4: 104.4%
- setting5: 110.1%
- setting6: 114.9%
initialHitBySetting:
- setting1: 初当り合算 1/197 / 初当りBONUS 1/291 / 炎炎激闘初当り 1/790
- setting2: 初当り合算 1/194 / 初当りBONUS 1/282 / 炎炎激闘初当り 1/756
- setting4: 初当り合算 1/182 / 初当りBONUS 1/257 / 炎炎激闘初当り 1/669
- setting5: 初当り合算 1/173 / 初当りBONUS 1/239 / 炎炎激闘初当り 1/611
- setting6: 初当り合算 1/169 / 初当りBONUS 1/230 / 炎炎激闘初当り 1/573
baseGamesPer50: 約33.8G/50枚（約34G表記あり）
netIncrease: 約5.7枚/G
basicPayout:
- 炎炎BONUS: 40G / 約230枚
- REGULAR BONUS: ベルナビ10回 / 約85枚
- エピソードBONUS: ベルナビ10回 / 約85枚
- 炎炎激闘: 15G+α / ボーナス期待度約61%
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はレア役・十字目変換・規定G数から初当りを目指す。
- 通常時ボーナス間天井は最大850G+α。
- 炎炎激闘は15G+α、ボーナス期待度約61%。
- 設定変更時は通常時と異なる朝イチ専用モードA/B/Cまたは天国へ移行する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間、ボーナス間天井、内部モード、内部状態をRESET。
- 設定変更後専用の朝イチモード移行抽選を行う。
- 通常最大850G+αのボーナス間天井は最大650G+αへ短縮。
- 朝イチA/B/Cまたは天国へ移行する。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、天井、内部モード、内部状態を引き継ぐ。
- ステージとメニュー画面は朝一見た目が初期化されるため、表示だけでは据え置き/変更を確定できない。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 機種別解析では純電源OFF→ON時は天井、内部モード、内部状態、有利区間を引き継ぐ。
- 液晶ゲーム数は0G表示へ戻るとする解析があり、内部G数との乖離が生じうる。
- 開始ステージは第8地区系の初期ステージへ戻る資料があり、開始画面単独では変更判別不可。
confidence: ANALYSIS_SINGLE_TO_HIGH / MULTI_ANALYSIS_MATCH

### gameCounterReset
- 設定変更: ボーナス間内部G数/天井進行RESET。
- 据え置き・純電断: 内部天井進行をCARRY_OVER。
- 液晶G表示は電断でも0Gへ戻るとする機種別解析あり。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 通常時ボーナス間天井: 最大850G+α。
- 設定変更後: 最大650G+α。
- 朝イチA: 650G+α。
- 朝イチB: 550G+α。
- 朝イチC: 450G+α。
- 天国: 88G+α。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は朝イチ専用モードA/B/Cまたは天国を再抽選。
- 据え置き/純電断は内部モードを引き継ぐ。
- 設定変更時モード振り分け（公開値）:
  - settings1/2/4: 朝イチA 約53% / 朝イチB 約1% / 朝イチC 約11% / 天国 約35%
  - settings5/6: 朝イチA 約52% / 朝イチB 約1% / 朝イチC 約11% / 天国 約36%
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更時は内部状態をRESET/再抽選。
- 据え置き・純電断時は内部状態を引き継ぐ。
- 十字目高確も設定変更でRESET、電断では引継ぎとする解析あり。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き/純電断: CARRY_OVER。
- 通常営業中の有利区間リセットは炎炎激闘終了時の一部、エンディング終了時にも発生。設定変更以外の有利区間リセットでは裏炎炎激闘ストック1～3個の恩恵があるが、設定変更時はこの恩恵の対象外。
confidence: ANALYSIS_HIGH

### resetBenefits
- 最大天井850G+α → 650G+αへ短縮。
- 約35～36%で天国（88G+α天井）。
- 朝イチ専用モードにより通常時より浅い規定G数帯が存在。
confidence: ANALYSIS_HIGH

### resetPenalties
- 据え置き時に残っていた天井進行・内部モード・内部状態は設定変更で消失。
- 設定変更時は、通常の「設定変更以外の有利区間リセット」で得られる裏炎炎激闘1～3個ストック恩恵の対象外。
confidence: ANALYSIS_HIGH

### resetDetection
- 88G付近で前兆発生: リセット濃厚材料。
- 88G付近で前兆なし + 100Gまたは150G付近で前兆: 朝イチC / 450G+α天井濃厚材料。
- 朝一650G+αを超えてボーナス非当選なら据え置き濃厚材料。
- 設定変更と据え置き双方で開始ステージは第8地区系、メニューも一部リセットされるため画面単独判別は不可。
- 本機固有のリールガックン条件/発生率は、表記揺れ・型式・メーカー名・設定変更/据え置き/電断/ガックンで再探索したが高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_ZONE_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
- 通常最大天井: 850G+α
- 設定変更後最大天井: 650G+α
- 朝イチA: 650G+α
- 朝イチB: 550G+α
- 朝イチC: 450G+α
- 天国: 88G+α
- settings1/2/4 モード振り分け: A約53% / B約1% / C約11% / 天国約35%
- settings5/6 モード振り分け: A約52% / B約1% / C約11% / 天国約36%
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### publicMorningNumbers
- リセット後の天国移行率は約35～36%。
- 朝イチ専用4モードの天井と振り分けを公開値として取得。

## conflicts
- netIncrease: 約5.7枚/Gが主要解析で一致。後年の二次記事に約5.8枚/G表記があるが、メーカー導入期/主要解析の5.7枚/Gをcanonical採用し丸め差候補として注記。
- setting3: 市場スペックは実質5段階（1/2/4/5/6）。一部後年記事の表にsetting3行が混入するが、canonical設定構成へは採用しない。
- releaseDate: 2024-05-07で複数一致。

## missingFields
- 本機固有の設定変更時リールガックン条件/発生率
- ガックンによる確定判別可否

## sources
取得日: 2026-09-14

### official / industry / machine DB
- パチビー: https://www.pachibee.jp/machines/index/224040001
- HAZUSE機種情報: https://hazuse.com/hd/330569-2/
- HAZUSE解析: https://hazuse.com/machine/pachislot/SX0072/
- ニコナナ機種CHECK: https://www.youtube.com/watch?v=cYLjg2aWKm4

### analysis
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/738/21302/
- なな徹 設定判別/モード振り分け: https://nana-press.com/kaiseki/machine/738/21299/
- なな徹 初当たりBONUS: https://nana-press.com/kaiseki/machine/738/21308/
- なな徹 炎炎激闘: https://nana-press.com/kaiseki/machine/738/21311/
- なな徹 炎炎BONUS等: https://nana-press.com/kaiseki/machine/738/21314/
- 一撃 天井/やめどき: https://1geki.jp/slot/l_ennenn/3/
- マルっとWAVE: https://marutto-w.com/shindai_reference/l_enen
- K-Navi: https://p-kn.com/slot/4125/
- Altema 朝一リセット: https://altema.jp/pachimo/lenenreset
- ぽこすろっと: https://www.nankaikoya.jp/lenennoshouboutai-kitaichi/

## researchNotes
- 型式名、メーカー名、シリーズ名と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井短縮」「モード」「ガックン」「有利区間」を組み替えて検索。
- resetBehaviorはなな徹を主軸に複数解析で照合。後年の炎炎ノ消防隊2を明示的に除外。
- 実機完全再現用の小役別抽選、全モード移行テーブル、炎炎激闘内部抽選は収集対象外。
