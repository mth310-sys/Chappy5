# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前は **291 `LOT8（ロットエイトR）`（イープレイ / 2008-08-25）**。
- 今回、境界再監査後の次の具体日付き未処理本線 **292 `イルカ夫人（新妻イルカ夫人）`（アビリット / 2008-09-08発売）** を追加。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 292. イルカ夫人（新妻イルカ夫人）

- record: `docs/real_machine_db/machines/2008-09-08_iruka_fujin.md`
- manufacturer: アビリット
- generation: 5号機
- systemType: ボーナス+天井RT / 告知型
- releaseDate: **2008-09-08**。旧業界追跡の具体発売日を採用し、2008-07-24当時内覧記事の「9月初旬導入予定」と照合。
- modelName: **イルカ夫人**。P-WORLDで検定番号 `8S0070` と照合。
- 設定体系: **1 / 2 / 5 / 6**。
- BIG: **1/339.6 → 1/257.0**。
- REG/CB: **1/436.9 → 1/341.3**。
- 総合算: **1/191.1 → 1/146.6**。
- PAYOUT: **94.3 / 98.3 / 102.5 / 108.9%**。
- 50枚ベース: **35.46 / 35.47 / 34.93 / 37.26G**（パチマガスロマガ訂正掲載値）。
- BIG約336枚、REG/CB平均約104枚（技術介入最大約112枚）。
- 天井RT `あおいタイム`: **BIG後777G / REG(CB)後555G** で突入し、次回ボーナスまで継続。
- `あおいタイム` の1Gあたり純増枚数は今回の再探索で直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 告知分類は、グリーンべると/解析系の「完全告知」とPlaygraph系の「準完全告知」が競合するため `CONFLICT_COMPLETE_VS_SEMI_COMPLETE`。実機DBでは中立的に「告知型」とした。

### resetBehavior（292）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 設定変更時の777G/555G天井カウンタ、あおいタイム状態、開始状態を本機固有資料で確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時の天井カウンタ/RT状態引継ぎを直接確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみの場合の天井カウンタ/RT状態を直接確定できず。
- `gameCounterReset`: `UNVERIFIED_AFTER_RESEARCH` — 通常天井値はBIG後777G/REG後555Gと確定したが、設定変更時クリア/引継ぎは未確認。
- `ceilingAfterReset`: `UNVERIFIED_AFTER_RESEARCH` — リセット短縮天井・専用天井数値は確認なし。通常天井値を朝一へ流用しない。
- `modeAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH` — 公開された朝一専用モード/通常時モード再抽選は確認なし。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH` — あおいタイム中の変更/据え置き/電断処理を一般論で補間しない。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH` — `イルカ夫人 / 新妻イルカ夫人 / アビリット` と設定変更・リセット・朝一・据え置き・電源OFF ON・宵越し・ガックン・初期出目・変更判別を組み替えて当時解析/業界記事/旧DB/後年DBを横断したが、本機固有の判別条件を確定できず。
- `numericResetData`: 通常天井は **BIG後777G / REG(CB)後555G**。設定変更後天井、朝一専用当選率、リセットモード振り分け等の公開値は確認なし。

## 今回の主要出典

取得日: 2026-09-02

- https://slothistory.com/kousin_kako05.html
  - 旧業界追跡資料。アビリット「イルカ夫人」、2008-09-08発売、純Aタイプ仕様・天井RT搭載。
- https://web-greenbelt.jp/00003694/
  - 当時業界記事。2008-07-24内覧、BIG最大336枚、REG平均104枚/技術介入最大112枚、BIG後777G/REG後555Gの天井RT「あおいタイム」、告知機能。
- https://p-mans.blogspot.com/2008/07/
  - 当時Playgraph系記事。9月初旬導入予定、準完全告知、UV告知。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/21/h.php
  - パチマガスロマガ。設定1/2/5/6のBIG/REG/合算、PAYOUT 94.3〜108.9%。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/21/c.php
  - パチマガスロマガ。50枚あたり35.46/35.47/34.93/37.26G。誌面誤植訂正後の掲載値。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/21/kyotai.php
  - パチマガスロマガ。基本システム、BIG/CB払い出し条件・獲得枚数系統、天井RT。
- https://www.p-world.co.jp/machine/database/5287
  - 後年DB。型式表記「イルカ夫人」、検定番号8S0070、2008年09月導入、5号機RT機を照合。

## 境界監査・重複防止

- **既存292件の再追加禁止。**
- 2008-08-25 `LOT8` 後〜9月初旬を旧業界追跡、当時業界記事、P-WORLD、解析DBで再監査し、今回確認できた次の具体日付き未処理本線を2008-09-08 `イルカ夫人` とした。
- `メガラニカDX` は2008-08-18検定通過痕跡まで。実販売/ホール導入裏付け未確定のため `INSPECTION_ONLY_CANDIDATE_NOT_MAINLINE` を維持。
- `ザ・ブルーハーツG` は旧追跡資料で8/18予定から9月へ変更との記録。通常版と分離して9月境界で再確認する。
- `シオサイV-30` は2008-11-03納品開始予定が確認済みのため11月まで保留。
- `完熟チェリー` は2008年10月境界で再確認。
- 検定通過日だけを導入日として扱わない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 2006年ヤーマ `ジャックポット トロピカルバージョン` の実ファイル同定問題は未解消。2017年 `Ver.2` と混同しない。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準292件地点。具体日付き本線は2008-09-08まで進行。**
2. 次は同じ **2008-09-08発売の `24 -TWENTY FOUR-`（大都技研）** を最優先で処理する。旧業界追跡で9/8発売が確認できているため、型式・性能コア・天井/RT/ART・resetBehaviorを当時資料で再構築する。
3. その後、9月境界の `ザ・ブルーハーツG / チキチキボカン / 漁師・網平 / キャッツ・アイ / タワラカワラ / 怒濤の剣` 等の具体発売/納品日を比較し、最古の未処理から継続する。
4. resetBehaviorは新規機種ごとに設定変更/据え置き/電源OFF→ON/ゲーム数・天井/モード・状態/有利区間/朝一恩恵・不利/変更判別/公開朝一数値を確認し、RT/ART状態は一般論で補間しない。
