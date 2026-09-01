# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前は **290 `マジシャンEX`（ファースト / 2008-08-18）**。
- 今回、次の未処理候補 **291 `LOT8（ロットエイトR）`（イープレイ / 2008-08-25発売）** を追加。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 291. LOT8（ロットエイトR）

- record: `docs/real_machine_db/machines/2008-08-25_lot8.md`
- manufacturer: イープレイ
- generation: 5号機
- systemType: ボーナス+無限RT / 完全告知
- releaseDate: **2008-08-25**。旧業界追跡資料の発売日を採用し、後年DBの「2008年9月導入」は発売日/導入月の定義差として保持。
- JPBIG: **1/1092.27 → 1/819.20**。
- ノーマルBIG: **1/524.29 → 1/297.89**。
- BIG合算: **1/354.25 → 1/218.45**。
- CT: **1/436.91 → 1/409.60**。
- 総合算: **1/195.63 → 1/142.47**。
- 50枚ベース: **36.61 → 38.10G**。
- JPBIG/BIG約200枚、CT約70枚。
- JPBIG後はRT `SHOW TIME`。**次回ノーマルBIG成立まで継続する無限RT、約+0.5枚/G**。CTを挟んでも継続する解析資料あり。
- 通常ゲーム数天井は非搭載。
- 機械割はパチマガスロマガ **98.66〜108.77%** とpacnk **96.50〜110.00%** が競合するため `CONFLICT_PAYOUT_RATE`。平均化しない。
- 正式型式名は現存一次資料で確定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior（291）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 設定変更時のSHOW TIME/内部状態処理を本機固有資料で確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時のRT状態維持を直接確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみの場合のSHOW TIME状態を直接確定できず。
- `gameCounterReset`: `NOT_APPLICABLE_TO_CEILING` — 通常ゲーム数天井非搭載。
- `ceilingAfterReset`: `NOT_APPLICABLE`。
- `modeAfterReset`: `NOT_APPLICABLE_TO_GAMEPLAY_MODE` — 朝一専用モード等は確認なし。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH` — 無限RT中の変更/電断処理は一般論で補間しない。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH` — `LOT8 / LOT 8R / ロットエイトR / イープレイ` と設定変更・リセット・朝一・据え置き・電源OFF ON・RT・ガックン・初期出目を組み替え、当時解析/旧業界追跡/後年DBを横断したが、本機固有の変更判別条件を確定できず。
- `numericResetData`: 短縮天井・朝一専用当選率・リセットモード振り分け等の公開値は確認なし。

## 今回の主要出典

取得日: 2026-09-02

- https://slothistory.com/kousin_kako05.html
  - 旧業界追跡資料。`LOT 8R（ロットエイト）`、イープレイ、2008-08-25発売、ロットセブン後継、ボーナス成立までの無限RT搭載。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eplay_slot/02/a.php
  - パチマガスロマガ。RT/完全告知、JPBIG後に次回BIGまで継続するRT、JPBIG/BIG約200枚、CT約70枚。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eplay_slot/02/h.php
  - パチマガスロマガ。設定1〜6のJPBIG/ノーマルBIG/BIG合算/CT/総合算、シミュレート機械割98.66〜108.77%。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eplay_slot/02/c.php
  - パチマガスロマガ。50枚あたり36.61〜38.10G。
- https://pacnk.com/slot/tools/sh_rotto8.html
  - 後年DB。2008年9月導入表記、設定別JPBIG/ノーマルBIG照合、天井非搭載、SHOW TIME約+0.5枚/G、CTを挟んでも継続、別系列機械割96.50〜110.00%。
- https://pacnk.com/photoslot/mlist_2008.html
  - 後年年表。LOT8を2008年9月・イープレイ機として照合。

## 境界監査・重複防止

- **既存291件の再追加禁止。**
- `メガラニカDX` は2008-08-18検定通過痕跡まで。実販売/ホール導入裏付け未確定のため `INSPECTION_ONLY_CANDIDATE_NOT_MAINLINE` を維持。
- `ザ・ブルーハーツG` は旧追跡資料で8/18予定から9月へ変更との記録。9月境界で通常版と分離して再確認。
- `シオサイV-30` は2008-11-03納品開始予定が確認済みのため11月まで保留。
- `完熟チェリー` は2008年10月境界で再確認。
- 検定通過日だけを導入日として扱わない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 2006年ヤーマ `ジャックポット トロピカルバージョン` の実ファイル同定問題は未解消。2017年 `Ver.2` と混同しない。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準291件地点。具体日付き本線は2008-08-25まで進行。**
2. 次は2008年8月25日同日〜8月末の未処理候補を再監査し、最古の未処理機種から継続する。
3. 特に8月下旬候補は、旧業界追跡・P-WORLD・メーカー公式・当時解析DBで具体納品/発売日を比較し、後年DBの月表記だけで順序を決めない。
4. 9月境界では `ザ・ブルーハーツG` を通常版と分離して確認し、`チキチキボカン / イルカ夫人 / 24-TWENTY FOUR- / 漁師・網平 / キャッツ・アイ / 怒濤の剣 / タワラカワラ` 等の具体日を再構築する。
5. resetBehaviorは新規機種ごとに設定変更/据え置き/電源OFF→ON/ゲーム数・天井/モード・状態/有利区間/朝一恩恵・不利/変更判別/公開朝一数値を確認し、RT/ART状態は一般論で補間しない。
