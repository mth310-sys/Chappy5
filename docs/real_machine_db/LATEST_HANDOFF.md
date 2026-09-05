# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **665**
- latestMachineAdded: **それいけ！こすみっくヒーローズ**（オーイズミ）
- latestRecord: `docs/real_machine_db/machines/2012-06-11_soreike-cosmic-heroes.md`
- chronologicalFrontier: **2012-06-11**
- frontierLatestExactDateMachine: **それいけ！こすみっくヒーローズ**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-06-11__NEXT_BOUNDARY_AUDIT_2012-06-12_TO_2012-06-17**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「バジリスク～甲賀忍法帖～II」を確認して開始。
- INDEXは旧地点19件のままなのでREADME規定どおりLATEST_HANDOFFと実レコードを正本化。開始時は recordCount 664 / frontier 2012-06-11。
- handoff指定の次候補「それいけ！こすみっくヒーローズ」をrepo重複確認し、未登録だったため665件目として追加。
- 06/11同日群を再監査。HAZUSEでは「ニューパルサーSP」も2012-06-11表記だが、前リレーで既登録済みのため重複追加しない。導入日資料差として今後の監査メモに保持。
- バジリスク～甲賀忍法帖～II、ニューパルサーSP、今回のそれいけ！こすみっくヒーローズまで確認し、現時点で追加すべき未登録の具体日2012-06-11機を新たに確定できなかったため06/11群を閉鎖。

## 今回の本線追加 — それいけ！こすみっくヒーローズ

### 導入・分類

- manufacturer: **オーイズミ**
- releaseDate: **2012-06-11**
- generation: **5号機**
- systemType: **ART主体 / ボーナス+セットストック&継続率ART**
- formalModelName: **それいけ！こすみっくヒーローズE**
- approvalNumber: **2S0164**

### 性能コア

- 機械割: **97.3 / 98.2 / 100.1 / 103.6 / 107.0 / 111.2%**
- ART初当たり: **1/613.95 / 507.82 / 526.15 / 398.60 / 381.04 / 274.12**
- ボーナス合成: **1/468.11 / 468.11 / 468.11 / 468.11 / 451.97 / 436.91**
- 50枚ベース: **約36.3～36.8G / 1000円**
- ボーナス: **約20枚（29枚払い出し終了）**
- ART「バトルモード」: **1セット30G / 純増約+3.0枚/G / 最大96%ループ**
- ART前準備・セット間「撃モード」: **平均約7.3G / 純増約+1.0枚/G**
- 通常天井: **ART間1280G消化後、32G前兆を経由してART**

### resetBehavior v0.7

- `settingChangeBehavior`: **CEILING_PROGRESS_CLEARED_AND_POST_RESET_128G_ART_CHANCE_UP_CONFIRMED**
- `carryOverBehavior`: **CEILING_PROGRESS_CARRIES_OVER_IF_NOT_SETTING_CHANGED__SUPPORTED_BY_YOIGOSHI_CLASSIFICATION**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE**
- `ceilingAfterReset`: **NORMAL_CEILING_RESTARTS__NO_SHORTENED_CEILING_VALUE_CONFIRMED**
- `modeAfterReset`: **SPECIAL_POST_RESET_128G_HIGHER_ART_HIT_RATE_CONFIRMED__UNDERLYING_MODE_DISTRIBUTION_UNVERIFIED**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **POST_RESET_128G_ART_HIT_RATE_UP**
- `resetPenalties`: **PREVIOUS_DAY_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**
- `resetDetection`: **INDIRECT_128G_BEHAVIOR_ONLY__GAKKUN_AND_DISPLAY_UNVERIFIED_AFTER_RESEARCH**
- `publicMorningNumbers`: **設定変更後1～128GのART当選率上昇を確認 / 正確な当選率はUNVERIFIED_AFTER_RESEARCH**

### resetBehavior品質メモ

- 天井狙い資料の「宵×」を同ページ定義どおり**設定変更で天井G数リセット**として採用。
- 同資料の「設定変更後330G」は**天井狙い開始目安**であり、設定変更後天井=330Gを意味しない。短縮天井値としては採用しない。
- 設定変更後128G以内のART当選率アップは当時パチマガスロマガで確認。
- 設定変更時の低確/高確振り分け、朝一専用モード振り分け、単純電源OFF→ON、ガックン/初期出目/液晶による確定変更判別は、表記揺れ・型式名・メーカー名を組み替えて再探索後も本機固有の直接数値を確定できずUNVERIFIED_AFTER_RESEARCH。

## CONFLICT / 品質メモ

- 機械割: HAZUSE=97/98/100/104/107/111%、パチマガスロマガ・5号機クロニクル・pacnk=97.3/98.2/100.1/103.6/107.0/111.2%。丸め差と判断し、主表は詳細値を採用。
- ART初当たり: pacnkはHAZUSEの総合合成系列1/265.6～付近を「初当りART」と表記する一方、パチマガスロマガ専用解析は1/613.95～1/274.12。定義/ラベル競合のため平均せず、主表は専用解析値、pacnk側はCONFLICT_NOTEとして保持。
- ニューパルサーSPの導入日: HAZUSEは2012-06-11。前リレー登録日との資料差は重複登録せず既存レコード側の将来DATE_QA候補として保持。

## 次回再開地点

1. **recordCount 665 / chronologicalFrontier 2012-06-11**から開始。
2. **2012-06-11同日群はCLOSED**。次は **2012-06-12～06-17境界監査** を行い、具体日付き未登録機がないか先に確認する。
3. その後、既知候補 **「鉄のラインバレル」** の導入日CONFLICT（K-Navi 2012-06-18 / パチビー 2012-06-25）を公式・業界・当時解析・古いDBで再照合し、採用日/CONFLICTを確定して未登録なら次レコード化する。
4. **「セブンバー30」** は2012-06-25候補。鉄のラインバレルと06/25同日群の前後関係を監査してから処理。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- HAZUSE: `https://hazuse.com/machine/pachislot/2S0164/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6723`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/28/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/28/h.php`
- パチマガスロマガ 小役/1000円: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/28/c.php`
- pacnk: `https://pacnk.com/slot/2012/cosmicheros/top.php`
- 5号機クロニクル: `https://5goki.com/oizumi`
- 2-9伝説 天井狙い一覧: `https://2-9densetsu.com/blog-entry-311-html/`
- パチ7回顧: `https://pachiseven.jp/columns/column_detail/17464`
- ニューパルサーSP導入日再監査 HAZUSE: `https://hazuse.com/machine/pachislot/2S0079/`

## GitHub commits

- それいけ！こすみっくヒーローズ machine record: `030ee22986e3462a3b358ef1a87e6afe54ee3ce0`
