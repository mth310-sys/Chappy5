# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **319 `バックトゥザフューチャーデラックス`（ロデオ / 2008-11月精度）**。
- 12月境界監査で、ALL7 2008-12-08群先頭の `AうたテレQUEEN(80’sアイドルS)` はP-WORLD/パチマガ等で **パチンコ `CRAうたテレQUEEN`** と確認したため、パチスロ実機DB本線から除外。
- 今回 **320 `いみそ～れ2ピュアエディション25`（エマ / 型式イミソーレ2H / 2008-12-08）** を追加。
- 性能コア + v0.7 `resetBehavior` を同時収集。バーニング版や30Φ版の性能/RT仕様を25Φピュア版へ流用していない。

## 320. いみそ～れ2ピュアエディション25

- record: `docs/real_machine_db/machines/2008-12_imisore2-pure-edition-25.md`
- manufacturer: エマ
- modelNumber: **イミソーレ2H**
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- releaseDate: **2008-12-08**（ALL7当時導入予定。P-WORLD/pacnkで2008年12月導入を補助確認）
- generation: 5号機
- systemType: **ノーマル / 完全告知 / ボーナス主体（RT非搭載ピュア・エディション）**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- BIG: **1/318.1 / 1/309.1 / 1/297.9 / 1/277.7 / 1/264.3 / 1/248.2**
- REG: **1/337.8 / 1/327.7 / 1/321.3 / 1/297.9 / 1/282.5 / 1/262.1**
- 合算: **1/163.8 / 1/159.1 / 1/154.6 / 1/143.7 / 1/136.5 / 1/127.5**
- BIG: **345枚を超える払い出しで終了 / 約312枚**
- REG: **105枚を超える払い出しで終了 / 約104枚**
- 50枚ベース: `UNVERIFIED_AFTER_RESEARCH`
- RT/ART/AT/CZ: **NOT_APPLICABLE_PURE_EDITION**。2008-10-23発表時資料で、ネオクラッシュモード搭載はバーニング・エディション側。ピュア版へ流用しない。
- 通常ゲーム数天井: **NONE_CONFIRMED_AFTER_RESEARCH**。pacnkも天井非搭載としている。
- `coreStatus: PARTIAL`

### 機械割CONFLICT（320）

- P-WORLD: **96.7 / 98.4 / 100.7 / 104.4 / 107.7 / 112.0%**
- pacnk: **96.7 / 98.4 / 100.7 / 104.4 / 107.6 / 112.0%**
- パチマガスロマガ・シミュレート: **96.92 / 98.54 / 100.74 / 104.64 / 107.75 / 111.55%**
- 丸め/算出条件差の可能性はあるが、平均化せず `CONFLICT` として各系列を保持。

### resetBehavior（320）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。表記揺れ（いみそ～れ2 / いみそーれ2 / イミソーレ2H / PureEdition25 / プレミアムビスカス）、エマと「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」「初期出目」を組み替え、P-WORLD、パチマガスロマガ、pacnk、当時業界記事、後年DBを横断したが本機固有の設定変更時初期出目/告知状態等は確定できず。
- `carryOverBehavior`: `NO_GAME_COUNT_CEILING_OR_MODE_TO_CARRY_CONFIRMED`。天井・RT・ART・AT・CZ・通常時モードを持つ資料は確認されず、朝一狙いへ影響する公開持越し要素は確認できない。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ONのみの場合の初期出目/表示/成立状態等、本機固有直接資料なし。
- `gameCounterReset`: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。
- `ceilingAfterReset`: `NOT_APPLICABLE_NO_CEILING`。
- `modeAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `stateAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/表示変化による本機固有判別情報は回収できず。
- 公開朝一数値: リセット固有短縮天井 `NOT_APPLICABLE`、リセットモード振り分け/朝一当選率/恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 320主要出典

取得日: 2026-09-02

- https://www.all7.jp/plans/index/2008/12/10 — ALL7。2008-12-08導入予定、メーカー=エマ。
- https://web-greenbelt.jp/00003852/ — グリーンべると。2008-10-23発表、5号機、ピュア/バーニング仕様分離、ピュアはネオクラッシュモード非搭載、25Φ/30Φピュア版の存在。
- https://www.p-world.co.jp/machine/database/5374 — P-WORLD。型式イミソーレ2H、25Φプレミアムビスカス、設定別BIG/REG/合算、機械割。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/a.php — パチマガスロマガ。基本システム、BIG/REG払い出し・実獲得枚数。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/h.php — パチマガスロマガ。設定別BIG/REG/合算、シミュレート機械割。
- https://pacnk.com/slot/tools/sh_imisore2pyuaed2008b.html — 後年DB。設定別BIG/REG/機械割、天井非搭載の照合。
- https://p-mans.blogspot.com/2008/10/ — 当時業界アーカイブ。ピュア/バーニングの仕様分離補助。

## 境界監査・重複防止

- **既存320件の再追加禁止。**
- `AうたテレQUEEN(80’sアイドルS)` は2008-12-08 ALL7一覧に混在するが、実体はパチンコ `CRAうたテレQUEEN`。本DBへ追加しない。
- `HAIBいちろう` は後年一覧で2008年11月表記があるが、ALL7当時導入予定は **2008-12-15**。検定通過記録は **2008-10-20**。現時点では11月へ遡及挿入せず、12/15候補として維持。新しい一次/当時導入根拠が見つかれば `CONFLICT` として再監査する。
- `いみそ～れ2` はピュア25/ピュア30/バーニング25/バーニング30が別仕様/別型式候補。後年一覧では4種とも2008年12月。兄弟機の性能値やRT仕様を相互流用しない。
- `バケーション` は2008-12-01発表だが2009年1月中旬納品予定のため2008年12月導入列へ混入させない。

## 次回再開地点

1. **LATEST_HANDOFF基準320件地点 / 2008-12-08同日群。**
2. 最優先で `いみそ～れ2ピュアエディション30` の既存登録有無、正式型式、25Φとの差、導入日を確認し、未処理なら独立レコード化する。
3. 同時に `いみそ～れ2バーニングエディション25/30` の実導入日を再確認する。後年一覧は2008年12月だが、ピュア版と仕様が異なるためRT「ネオクラッシュモード」を含め独立処理する。具体日が12/08より前なら時系列へ遡及挿入する。
4. その後、同日群 `ぱちスロST ゴジラ` → `ぱちスロST 行け!稲中卓球部` → `ウルトラマン・ザ・スロット` → `カイジ2` → `ハイサイ蝶特急` の既存登録有無と具体導入日を監査し、未処理だけ追加する。
5. 各機種で性能コア + v0.7 `resetBehavior` を同時収集し、欠損判定前に表記揺れ・型式・メーカー・シリーズ名とリセット関連検索語を変えて横断再探索する。
