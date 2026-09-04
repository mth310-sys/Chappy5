# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **639**
- latestMachineAdded: **チェリーパラダイス**（ソフィア）
- latestRecord: `docs/real_machine_db/machines/2012-02-20_cherry-paradise.md`
- chronologicalFrontier: **2012-02-20**
- frontierLatestExactDateMachine: **チェリーパラダイス**
- schema: **resetBehavior v0.7**
- status: **2012-02-20_SAME_DAY_GROUP_AUDIT_REQUIRED__EVA_DATE_CONFLICT_HELD_FOR_2012-02-27__NEXT_EARLIEST_UNPROCESSED_AFTER_2012-02-20**

## 今回の本線追加 — チェリーパラダイス

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ToHeart2」を確認して開始。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時正本は **recordCount 638 / chronologicalFrontier 2012-02-20 / latestMachineAdded ToHeart2**。
- `docs/real_machine_db/machines/2012-02-20_cherry-paradise.md` を直接fetchして404を確認後、639件目として追加。

### 導入日・型式

- 主導入日: **2012-02-20**。
- HAZUSEが型式「チェリーパラダイスA3」について2012-02-20導入開始と掲載。
- ソフィア公式現存製品一覧に「チェリーパラダイス」が掲載され、5号機クロニクル、pacnk、パチビー回顧、グリーンべると回顧でも2012年2月機として照合。
- 型式名: **チェリーパラダイスA3**。
- 検定番号: **1S0966**。

### 性能コア

- systemType: **ノーマルAタイプ / 完全告知 / 小役前兆型告知**。
- 設定別機械割: **96.9 / 97.8 / 98.7 / 100.2 / 103.2 / 105.6%**。
- BIG: **1/290.0 / 284.9 / 280.1 / 271.9 / 263.2 / 255.0**。
- REG: **1/546.1 / 528.5 / 512.0 / 489.1 / 461.5 / 442.8**。
- ボーナス合算: **1/189.4 / 185.1 / 181.0 / 174.8 / 167.5〜167.6 / 161.8**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。小役確率から逆算せず、直接公表値のみを要求したため欠損保持。
- 基本獲得: **BIG 336枚 / REG 112枚**。
- ART/AT/CZ: **非搭載**。
- 天井: **非搭載**。

### resetBehavior v0.7

- `settingChangeBehavior`: **NO_CEILING_OR_PERSISTENT_AT_MODE_APPLICABLE__TRANSIENT_STATE_UNVERIFIED**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**。
- `modeAfterReset`: **NOT_APPLICABLE_NO_PERSISTENT_AT_ART_CZ_GAME_MODE_CONFIRMED**。
- `stateAfterReset`: 一時的なWIN/CHANCEランプ、成立ボーナス、リール状態等の設定変更時挙動は **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: ガックン、初期出目、WIN/CHANCEランプ等による本機固有の変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

### 競合・注意

- 機械割はHAZUSE/パチマガスロマガ/5号機クロニクルが96.9/97.8/98.7/100.2/103.2/105.6%で一致。pacnkは96.30/967.80/98.60/100.10/103.20/105.50%で設定2に明白な桁異常があるため主値に採用せずCONFLICT_NOTE保持。
- BIG設定2はHAZUSE/P-WORLD系1/284.9に対してパチマガスロマガ検索取得値1/284.0。主値1/284.9、差異保持。
- 合算設定5はHAZUSE 1/167.5 / パチマガスロマガ 1/167.6で丸め差。
- 50枚ベース、据え置き、単純電源OFF→ON、ガックン/初期出目等は検索語と資料系統を変えて十分再探索後も直接確定できずUNVERIFIED_AFTER_RESEARCH。

## 時系列監査

- 2012-02-20同日群を再探索し、未登録のチェリーパラダイスを確認して追加。
- HAZUSEでは同じ2012-02-20に **「ヱヴァンゲリヲン～生命の鼓動～」** を掲載するが、K-Naviは2012-02-27をホール導入開始日とし、2012-02-20付K-Navi記事でも「2月27日（最速導入）」と明記。
- さらに2012-02-27のフューチャースコープ発表を掲載したGAME Watch/4Gamerが「2月27日より順次全国ホール導入開始」と記録するため、生命の鼓動は2月20日へ先行登録せず **DATE_CONFLICT_HELD_FOR_2012-02-27** とする。
- 次回は **2012-02-20同日群の残存未登録5号機を最終監査**。追加がなければ2012-02-21以降を進み、2012-02-27到達時に「ヱヴァンゲリヲン～生命の鼓動～」を日付CONFLICT付きで処理する。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 639 / chronologicalFrontier 2012-02-20**から開始。
2. **2012-02-20同日群の未登録5号機**をK-Navi/P-WORLD/パチビー/HAZUSE/当時業界記事で最終監査。
3. 「ヱヴァンゲリヲン～生命の鼓動～」はHAZUSE 02-20 vs K-Navi/GAME Watch/4Gamer 02-27のため、02-27到達まで保留する。
4. 同日群に漏れがなければ **2012-02-21以降の最古未処理5号機**を日付順に確定する。
5. 候補確定後、想定実パスを直接fetch→重複確認→性能コア+resetBehavior v0.7を収集。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

- ソフィア公式: `https://www.sophia-net.co.jp/products/products_slot.html`
- HAZUSE チェリーパラダイス: `https://hazuse.com/machine/pachislot/1S0966/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6596`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sophia_slot/01/h.php`
- パチマガスロマガ 通常時の打ち方: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sophia_slot/01/d.php`
- 5号機クロニクル: `https://5goki.com/sopia`
- pacnk: `https://pacnk.com/slot/tools/sh_cherryparadise.html`
- グリーンべると回顧: `https://web-greenbelt.jp/00001712/`
- パチビー回顧: `https://www.pachibee.jp/ivent/view/2987`
- HAZUSE 生命の鼓動: `https://hazuse.com/machine/pachislot/1S1168/`
- K-Navi 生命の鼓動: `https://p-kn.com/slot/1576/`
- GAME Watch 2012-02-27: `https://game.watch.impress.co.jp/docs/news/515021.html`
- 4Gamer 2012-02-27: `https://www.4gamer.net/games/148/G014838/20120227009/`

## GitHub commits

- machine record: `5b57b52fa14dcdb4d82f3f3ea304d4358b8c2b39`
