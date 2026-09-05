# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **663**
- latestMachineAdded: **パチスロ 熱血！華成学園ヒーロー部**（ディ・ライト）
- latestRecord: `docs/real_machine_db/machines/2012-06-04_nekketsu-kasei-gakuen-hero-bu.md`
- chronologicalFrontier: **2012-06-04**
- frontierLatestExactDateMachine: **パチスロ 熱血！華成学園ヒーロー部**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-06-04_GROUP__NEXT_EXACT_DATE_AUDIT_FROM_2012-06-05**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「オアシス」を確認して開始。
- INDEXは旧地点19件のままなのでREADME規定どおりLATEST_HANDOFFと実レコードを正本化。開始時は recordCount 662 / frontier 2012-06-04。
- HANDOFF指定のディ・ライト「パチスロ 熱血！華成学園ヒーロー部」をrepo検索し、未登録を確認して663件目として追加。
- 導入日は2012-06-05公開の当時新台一覧が2012-06-04を明記。P-WORLDは2012年05月の月単位表示を持つため精度差として保持し、日付キーは2012-06-04。
- 性能コアはP-WORLD、当時パチマガスロマガ、2012-06-05当時新台一覧、A-SLOT、後年検定回顧資料を横断。機械割、BIG/REG/ART、獲得枚数、ART純増は複数系統で一致。
- 50枚ベースは表記揺れ・型式名・メーカー名と50枚/1000円/ベース/コイン持ちを組み替えて再探索したが直接値を確定できずUNVERIFIED_AFTER_RESEARCH。
- resetBehaviorは「設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/1200G/高確/モード/状態/ガックン」を組み替えて再探索。パチマガスロマガに本機専用「朝イチ・設定変更」項目が存在することは確認したが具体本文は取得不能。設定変更時の天井カウンタ、据え置き、電断、内部状態、変更判別は推測せずUNVERIFIED_AFTER_RESEARCH。
- 当時2012-06-04新台一覧で、同日候補のパイレーツワールド、ニューパルサーSP、オアシス、熱血！華成学園ヒーロー部、天 天和通りの快男児を再照合。GTOも既登録。現HANDOFFまでで既知の2012-06-04候補を処理済みとし同日群を閉鎖。

## 今回の本線追加 — パチスロ 熱血！華成学園ヒーロー部

### 導入・分類

- manufacturer: **ディ・ライト / D-light**
- releaseDate: **2012-06-04**（当時新台一覧基準）
- generation: **5号機**
- systemType: **A+ART / ゲーム数上乗せ+セットストックART**
- formalModelName: **熱血！華成学園～正義参上～XF**
- approvalNumber: **1S1274**

### 性能コア

- 機械割: **95.91 / 98.63 / 100.58 / 104.29 / 106.61 / 111.79%**
- BIG合算: **1/434.0 / 420.1 / 407.1 / 394.8 / 370.3 / 374.5**
- REG合算: **1/618.3 / 595.8 / 574.9 / 555.4 / 546.1 / 512.0**
- ART初当り: **1/490.8 / 450.8 / 444.3 / 389.5 / 382.1 / 290.0**
- ボーナス+ART合算: **1/185.6 / 175.7 / 171.2 / 159.3 / 153.8 / 134.7**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- ART「バーニングダッシュ」: **1セット50G+α / 約+1.4枚/G**
- 青7BIG: **約301枚**、赤7BIG: **約203枚**、REG/PB: **約56枚**
- 通常天井: **ボーナス間1200G後、約30G前兆を経由しART 5or7セット**

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**

## CONFLICT / 品質メモ

- releaseDate: 当時新台一覧=2012-06-04、P-WORLD=2012年05月。平均せず資料差を保持し、具体日を持つ当時資料を時系列キーに採用。
- パチマガスロマガに「朝イチ・設定変更」項目は存在するが、本文未取得のため内容を推定しない。
- 機械割はパチマガ精密値と当時一覧丸め値が実質一致。

## 次回再開地点

1. **recordCount 663 / chronologicalFrontier 2012-06-04**から開始。
2. **2012-06-04同日群は閉鎖済み**。2012-06-05以降の具体日付き未処理5号機を時系列で監査する。
3. 2012年6月の未処理候補として **「バジリスク～甲賀忍法帖～II」「鉄のラインバレル」「それいけ！こすみっくヒーローズ」「セブンバー30」** が残る。各機の具体導入日をK-Navi/P-WORLD/HAZUSE/当時業界記事で再照合し、最古の未登録機を664件目候補にする。月順や知名度で飛ばさない。
4. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- P-WORLD: `https://www.p-world.co.jp/machine/database/6714`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/01/h.php`
- パチマガスロマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/01/d-light_slot_01.php`
- 2012-06-05当時新台一覧: `https://macerate.seesaa.net/article/273495238.html`
- A-SLOT: `https://www.a-slot.com/SHOP/dlight_2.html`
- パチ7検定回顧: `https://pachiseven.jp/articles/detail/5424`

## GitHub commits

- オアシス machine record: `3c7877eb20c01089cbd6adfeb215ebe42bfcf93f`
- 熱血！華成学園ヒーロー部 machine record: `33d883651f2638d93be70942ef315fe2a346d04b`
