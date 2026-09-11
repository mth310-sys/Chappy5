更新日: 2026-09-11

## 現在地点
- recordCount: **1380**
- latestRecordAdded: **Sどんだけ / パチスロどんだけ — No.1380**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-12-14_dondake.md`
- chronologicalFrontier: **2020-12-14**
- frontierLatestMachine: **Sどんだけ / パチスロどんだけ — No.1380**
- schema: **resetBehavior v0.7**
- status: **2020-12-14_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1379「アイムジャグラーEX（6号機）」、遡及QAカーソル「スロットチャンネルTV」を再取得して開始。
- `INDEX.md` は旧表示のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- 2020-12-14群の未処理PB機 `SどんだけJ2` を再調査し、No.1380として追加。
- 1geki一般流通カレンダーでは12/14スロットがアイムジャグラーEXのみだが、K-NaviはSどんだけも同日掲載。P-WORLDと当時PB資料でJPS製 `SどんだけJ2`、UNO系列オリジナルPB、2020-12-14導入を確認したため、`SOURCE_SCOPE_DIFFERENCE / PB_OMISSION` として独立収録。
- 12/14群はアイムジャグラーEX + Sどんだけの2機を処理し、全メーカー・PB・別資料系統を横断監査して **CLOSED** とした。
- 遡及QAは `2007-04-01_slot-channel-tv.md` を再探索し、既存 `coreStatus: PARTIAL` を維持したままreset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ正式化。

## No.1380 — Sどんだけ / パチスロどんだけ
- path: `docs/real_machine_db/machines/2020-12-14_dondake.md`
- manufacturer: **JPS（ジェイピーエス）**
- formalModel: **SどんだけJ2**
- certificationNumber: **0S1074**
- releaseDate: **2020-12-14**
- generation/system: **6号機 / ノーマルAタイプ / 完全告知 / UNO系列オリジナルPB**
- 設定: **2 / 3 / 5 の3段階**
- BIG: **約1/269.7 / 約1/269.7 / 約1/259.0**
- REG: **1/399.6 / 約1/331.0 / 1/255.0**
- 合算: **1/161.0 / 約1/148.6 / 約1/128.5**
- basicPayout: **BIG最大252枚 / REG最大72枚**
- payoutRateBySetting: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- coreStatus: **PARTIAL**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**

### resetBehavior v0.7 — No.1380
- 天井・周期・AT/ART/CZ: 通常時ゲーム数天井等は確認されず、物差し上は `NOT_APPLICABLE / NONE_CONFIRMED`。
- 設定変更/据え置き/純電断: 成立済みボーナス・告知状態等の本機固有処理は公開資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: ボーナス主体ノーマル機のためAT/ART/CZの有利区間管理は `NOT_APPLICABLE_FOR_YARDSTICK`。
- 朝一恩恵/不利: 設定変更専用の短縮天井、CZ、専用高確、定量的不利は直接公開確認なし。
- 変更判別: 本機固有ガックン、初期出目、ランプ等の確定/濃厚契約は `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一数値: `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。

## conflicts / 定義差
- 12/14群機種数: 1gekiは一般流通スロット1機、K-Naviは2機。SどんだけのPB実導入資料を別途確認できるため、欠落ではなく資料スコープ差として保持。
- BIG/REG/合算: P-WORLDは整数分母表示、当時PB資料は小数分母表示。端点は丸め差として整合しCONFLICT扱いしない。
- No.1380の機械割・50枚ベースは信頼できる公開値を固定できず、類似ノーマル機やアイムジャグラーEXの値を流用しない。

## 2020-12-14群監査 — CLOSED
処理済み:
1. **アイムジャグラーEX（6号機） — No.1379**
2. **Sどんだけ / パチスロどんだけ — No.1380**

- PBを含む別系統まで再監査し、同日導入の追加パチスロを固定できなかったためCLOSED。

## 次回本線の再開地点
- 最新main再同期後、次の確認済み導入群 **2020-12-21** へ進む。
- 現時点で実導入を確認できる候補は **「パチスロ 哲也－天運地力－」** と **「パチスロひぐらしのなく頃に祭2」**。
- K-Navi旧カレンダーには `パチスロ頭文字D` が12/21候補として現れるが、後発資料では実導入 **2021-01-12** が確認されるため、予定変更/延期として12/21群へ重複登録しない。次回開始時に公式・当時業界・解析カレンダーで再監査する。
- 最初の未処理機種を確認後、**No.1381候補**として追加する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理: `docs/real_machine_db/machines/2007-04-01_slot-channel-tv.md`（スロットチャンネルTV）。
- 既存 `coreStatus: PARTIAL` は維持。
- reset側: **PARTIAL_RESEARCH_EXHAUSTED**。
- 設定変更/据え置き/純電断時のRT「ゴールデンタイム」残りG・内部RT状態、成立済みボーナス/告知状態、本機固有変更判別、朝一数値は資料系統を変えた再探索でも固定できず、一般的5号機RT挙動から補完しない。
- Git追加履歴を確認した次回遡及QA: **`docs/real_machine_db/machines/2007-04-08_super-bomb.md`（スーパーボム）**。

## GitHub保存
- No.1380追加 commit: `e3757d31bf3b28eb50a3af9cf2823793dddf6528`
- スロットチャンネルTV reset QA commit: `da1c53abcf36ab58f0d932e5da6e5bb4810a4fcc`

## 主要出典 — 取得日 2026-09-11
### No.1380 Sどんだけ
- https://www.p-world.co.jp/machine/database/9329
- https://pachinko-curation.com/23337/
- https://1geki.jp/newmachinecalender/202012/
- https://p-kn.com/calendar/202012/

### 次境界 2020-12-21
- https://www.pachibee.jp/machines/index/220100008 — 哲也－天運地力－ 2020-12-21
- https://p-kn.com/slot/3498/ — ひぐらしのなく頃に祭2 2020-12-21
- https://pachinavi.net/machines/initial-d/ — 頭文字D 実導入2021-01-12の補助確認

### 遡及QA スロットチャンネルTV
- https://news.p-world.co.jp/articles/2039/greenbelt
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/14/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/14/c-1.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/14/kyotai.php
- https://hazuse.com/i/data/slotTV/top.htm
