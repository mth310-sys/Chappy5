# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **626**
- latestMachineAdded: **パチスロ ぷよぷよ！**（タイヨーエレック）
- latestRecord: `docs/real_machine_db/machines/2011-12-05_puyopuyo.md`
- chronologicalFrontier: **2011-12-05**
- frontierLatestExactDateMachine: **パチスロ ぷよぷよ！**（releaseDate CONFLICT 2011-12-05 vs 2011-12-19）
- schema: **resetBehavior v0.7**
- status: **2011-12-05_GROUP_FINAL_AUDIT_REQUIRED_BEFORE_ADVANCE**

## 今回の本線追加 — パチスロ ぷよぷよ！

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ北斗の拳 世紀末救世主伝説」を再取得して開始。
- 開始時正本は **recordCount 625 / chronologicalFrontier 2011-12-05**。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- GitHub repo code searchで「ぷよぷよ」未検出を確認し626件目として追加。
- 型式表記は **ぷよぷよ!M**。検定番号は今回の横断検索でも直接確定できずUNVERIFIED_AFTER_RESEARCH。
- 導入日はK-Navi **2011-12-05**、パチビー **2011-12-19**で競合。納品/地域先行/全国導入等の定義差を説明する一次資料を確定できないため `CONFLICT_EXACT_DATE_2011-12-05_VS_2011-12-19` として双方保持。時系列漏れ防止上の主キーのみ最古具体日12/05を使用。

### 性能コア

- 5号機 / ボーナス+ART。
- A-SLOT整理値の機械割: **97.2 / 99.2 / 102.8 / 105.6 / 110.2 / 110.4%**。
- A-SLOT整理値のボーナス合成: **1/91.0 / 1/90.4 / 1/89.8 / 1/89.2 / 1/88.6 / 1/88.0**。
- ART「天空の階段モード」: **1セット30G+α / 約+1.5枚/G**。A-SLOTとパチビーでART最低30G・純増約1.5枚/Gを照合。
- アミティ/アルルボーナス: **約80枚**（パチビー）。
- `ART初当たり`、`baseGamesPer50` は表記揺れ・型式・メーカー・ART突入率・50枚/1k/コイン持ち等へ検索語を変更しても比較可能な直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH / GAME_COUNT_CEILING_NOT_CONFIRMED**。
- `ceilingAfterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。通常ゲーム数天井自体も今回直接確定できず。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。通常時に高確示唆ステージ「未完の塔」があることは確認したが、変更時の内部状態処理は未確定。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶/ランプによる本機固有の変更判別を確定できず。
- 一般的な5号機ART仕様や他タイヨーエレック機の挙動は流用していない。

## 時系列監査

- 2011-11-21群は閉鎖済み。
- 2011-12-02枠は前回監査で新規5号機候補を確定できず。
- 2011-12-05では既登録の「パチスロ北斗の拳 世紀末救世主伝説」に加え、今回「パチスロ ぷよぷよ！」を追加。
- 日付完全一致検索では今回、新たな12/05機は確認できなかったが、**ぷよぷよ自体の日付競合が残るため12/05群を完全閉鎖とはまだ断定しない**。
- 次回はHAZUSE新台カレンダー、K-Navi、メーカー別5号機一覧、当時業界記事をもう一巡し、12/05同日群に漏れがなければ12/06以降へ進む。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 626 / chronologicalFrontier 2011-12-05**から開始。
2. 2011-12-05同日群を最終監査する。
3. 「パチスロ ぷよぷよ！」の日付12/05 vs 12/19について、一次/当時業界記事で定義差を説明できる資料が見つかれば更新。見つからなければCONFLICT維持。
4. 12/05群に追加漏れがなければ、**2011-12-06〜12-18の未処理機を導入日順に監査**。12/19へ飛ぶ前に途中日を閉じる。
5. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/周期/モード/状態/ガックン/有利区間を組み替えて再探索。
6. 競合値は平均せずCONFLICT。一般則・別機種からの補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### パチスロ ぷよぷよ！
- K-Navi: `https://p-kn.com/slot/1690/`
- パチビー: `https://www.pachibee.jp/machines/lecture/212040010`
- A-SLOT: `https://www.a-slot.com/SHOP/taiyo_elec16.html`
- タイアップ機一覧: `https://sulocale.sulopachinews.com/archives/23606`

### 今回のGitHub commit
- 626番レコード追加: `a9c35544b127780b2f0739f3b9db400583818524`

### 次回順序確認
- **2011-12-05同日群最終監査 → 追加漏れなしなら12/06以降を日付順に監査。**
