# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **664**
- latestMachineAdded: **バジリスク～甲賀忍法帖～II**（メーシー）
- latestRecord: `docs/real_machine_db/machines/2012-06-11_basilisk-kouga-ninpouchou-ii.md`
- chronologicalFrontier: **2012-06-11**
- frontierLatestExactDateMachine: **バジリスク～甲賀忍法帖～II**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-06-11_SAME_DAY_GROUP**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ 熱血！華成学園ヒーロー部」を確認して開始。
- INDEXは旧地点19件のままなのでREADME規定どおりLATEST_HANDOFFと実レコード、直近コミットを正本化。開始時は recordCount 663 / frontier 2012-06-04。
- 直近コミットも確認し、前回地点以降にニューパルサーSP、オアシス、熱血！華成学園ヒーロー部が別リレーで追加され、2012-06-04同日群が閉鎖済みであることを確認。重複調査せず2012-06-05以降へ前進。
- 2012-06-05～06-10を具体日検索し、今回新規に確定できる未登録5号機はなし。HANDOFF候補を再照合すると、バジリスク～甲賀忍法帖～IIとそれいけ！こすみっくヒーローズが2012-06-11、鉄のラインバレルはK-Navi 2012-06-18 / パチビー 2012-06-25で後日、セブンバー30は2012-06-25。
- ユニバーサル公式2012-06-08発表が「バジリスク～甲賀忍法帖～II」の2012-06-11全国ホール順次導入開始を明記。K-Navi、パチビー、HAZUSEも2012-06-11で一致するため664件目として追加。
- 性能コアはユニバーサル公式、P-WORLD、K-Navi、HAZUSE、パチマガスロマガ、パチビー、当時/後年解析を横断。機械割、ART初当たり、合算、50枚ベース範囲、純増、BIG、天井を回収。
- resetBehaviorは「バジリスクII / バジリスクⅡ / バジ2 / バジリスクII-NH / メーシー」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 1280G / 1200G / 高確 / モード / 状態 / ガックン / RAMクリア」を組み替えて再探索。
- 本機は設定変更時に内部状態を再抽選する一方、**天井ゲーム数は設定変更だけでは前日から引き継ぐ**特殊挙動を機種固有資料で確認。RAMクリア時はゲーム数リセットとする資料も確認。
- 設定変更時の内部状態公開値は、設定1/3/5=低確75.00%・高確25.00%、設定2/4/6=低確66.67%・高確33.33%。朝一客行動に直接効く公開数値として保存。
- 純粋な電源OFF→ONのみの場合の内部状態再抽選/保持、およびガックン/初期出目等による確定的変更判別は、十分な再探索後も本機固有直接契約を確定できずUNVERIFIED_AFTER_RESEARCH。

## 今回の本線追加 — バジリスク～甲賀忍法帖～II

### 導入・分類

- manufacturer: **メーシー / UNIVERSAL ENTERTAINMENT**
- releaseDate: **2012-06-11**
- generation: **5号機**
- systemType: **ART主体 / プレミアムBIG+継続率&セットストックART**
- formalModelName: **バジリスクII-NH**
- approvalNumber: **2S0260**

### 性能コア

- 機械割: **97.4 / 99.0 / 103.3 / 107.2 / 112.9 / 119.5%**
- ART初当たり: **1/294 / 262 / 252 / 218 / 210 / 178**
- BIG+ART合算: **1/292 / 260 / 251 / 217 / 209 / 177**
- BIG: **全設定1/32768、約336枚**
- 50枚ベース: **約29.8～31.1G（設定1～6範囲）**
- ART「バジリスクタイム」: **追想の刻10G+α + 争忍の刻20～50G / 純増約+2.7枚/G**
- 通常天井: **ART終了後/通常時1280G**。別資料では内部通常時1200G+前兆、データ表示上1280G前後と説明されるため定義差として保持。

### resetBehavior v0.7

- `settingChangeBehavior`: **INTERNAL_STATE_RESELECTED__CEILING_PROGRESS_RETAINED**
- `carryOverBehavior`: **CEILING_PROGRESS_CARRIES_OVER**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **RETAIN_ON_SETTING_CHANGE__CLEAR_ON_RAM_CLEAR**
- `ceilingAfterReset`: **NO_SETTING_CHANGE_SHORTENING_CONFIRMED**
- `modeAfterReset`: **INTERNAL_STATE_RESELECTED_ON_SETTING_CHANGE**
- `stateAfterReset`: **SETTING_SPECIFIC_LOW/HIGH_DISTRIBUTION_CONFIRMED**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **HIGH_STATE_START_CHANCE + CEILING_PROGRESS_NOT_LOST_BY_SETTING_CHANGE**
- `resetPenalties`: **NONE_CONFIRMED_FOR_NORMAL_SETTING_CHANGE**
- `resetDetection`: **INDIRECT_STATE_INFERENCE_ONLY / GAKKUN_UNVERIFIED_AFTER_RESEARCH**
- `publicMorningNumbers`: **奇数設定 低確75.00%・高確25.00% / 偶数設定 低確66.67%・高確33.33%**

## CONFLICT / 品質メモ

- 機械割設定6: P-WORLD=119.4%、HAZUSE系/複数解析=119.5%。平均せず丸め差として両方保持し、主表は複数一致の119.5%。
- 天井表記: P-WORLD/HAZUSE=1280G、別攻略資料=内部通常時1200G+前兆・データ表示1280G前後。カウンタ定義/前兆込み差として保持。
- 「設定変更でも天井ゲーム数引継ぎ」は一般則から推定せず、本機固有資料で確認した値のみ採用。シリーズ後継「絆」「III」のreset情報は混入させていない。

## 次回再開地点

1. **recordCount 664 / chronologicalFrontier 2012-06-11**から開始。
2. **2012-06-11同日群はOPEN**。同日未処理が確認済みの **「それいけ！こすみっくヒーローズ」（オーイズミ）** を最優先でrepo重複確認し、未登録なら665件目候補として性能コア+resetBehavior v0.7を収集する。
3. 06-11群を閉じるまでは後日へ進まない。閉鎖後は鉄のラインバレルの導入日CONFLICT（K-Navi 06-18 / パチビー 06-25）を精査し、その前に具体日付き未処理機がないか監査する。セブンバー30は06-25候補。
4. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- ユニバーサル公式製品: `https://www.universal-777.com/product/slot/basilisk2/`
- ユニバーサル公式2012-06-08発表: `https://www.atpress.ne.jp/news/27819`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6690`
- K-Navi: `https://p-kn.com/slot/1619/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0105/`
- パチマガスロマガ基本情報: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/40/a.php`
- パチマガスロマガ小役/1000円項目: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/40/c-1.php`
- メタボ教授 2013-12-12: `https://metabopro.com/bajisecondtorimu/`
- スロパチステーション「宵越し」: `https://777.slopachi-station.com/words/yoigosi/`
- パチビー: `https://www.pachibee.jp/machines/lecture/212030005`
- 次候補それいけ！こすみっくヒーローズ HAZUSE: `https://hazuse.com/machine/pachislot/2S0164/`

## GitHub commits

- バジリスク～甲賀忍法帖～II machine record: `9e642f056d5f3cf1cfa89cc2b83adf36b6f7ec11`
