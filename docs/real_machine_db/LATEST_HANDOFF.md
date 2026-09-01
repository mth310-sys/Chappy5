# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **300 `バウンティキラー`（山佐 / 2008-10-05納品予定）**。
- 2008年10月6〜18日候補を再監査し、一次/当時業界系で **`天晴招猫` は「10月上旬導入予定」**、`アカギ～永続の闘牌～` は **2008-10-14納品開始** を確認。時系列漏れ防止のため、10月上旬候補である **301 `天晴招猫`（エマ / 2008-10・月精度）** を先に追加。
- `天晴招猫` は性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 301. 天晴招猫

- record: `docs/real_machine_db/machines/2008-10_appare-manekineko.md`
- manufacturer: エマ
- modelNumber: `アッパレマネキネコV`（P-WORLD、検定番号8S0324）
- generation: 5号機
- systemType: ボーナス主体 + 天井RT / 小役優先制御
- releaseDate: **2008-10（月精度）**。K-Navi当時業界ニュースは2008-09-03時点で「ホールへの導入は10月上旬を予定」。P-WORLD・5号機クロニクルは2008年10月で一致。具体日の強い根拠は得られず、日付を捏造しない。
- 設定: **1 / 2 / 3 / 4 / 5 / 6**。
- BIG合成: **1/309.1 / 1/297.9 / 1/287.4 / 1/273.1 / 1/260.1 / 1/240.9**。
- REG: **1/425.6 / 1/414.8 / 1/399.6 / 1/385.5 / 1/360.1 / 1/331.0**。
- 総合算: **1/179.1 / 1/173.4 / 1/167.2 / 1/159.8 / 1/151.0 / 1/139.4**。
- 1000円あたり: **37.10 / 37.45 / 37.86 / 38.21 / 38.61 / 39.06G**。
- BIG約**312枚** / REG約**117枚**。規定払い出しはBIG345枚超 / REG120枚超。
- 天井RT搭載は複数資料で確認。ただし今回、**天井発動G数とRT純増/Gの直接本文を確定できず**、十分な再探索後 `UNVERIFIED_AFTER_RESEARCH`。

### 機械割（301）

- パチマガスロマガ simulation: **97.78 / 99.63 / 101.68 / 104.29 / 107.27 / 111.83%**。
- 5号機クロニクル: **97.9 / 99.8 / 101.8 / 104.4 / 107.5 / 112.0%**。
- 平均せず別系列として保持。差は概ね丸め・集計精度差の範囲とみなし、現時点では `CONFLICT` ではなく `ROUNDING_VARIANCE_NOT_CONFLICT`。

### resetBehavior（301）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。パチマガスロマガ現存インデックスに「攻め時・ヤメ時・設定変更時」専用項目は存在するが本文回収不能。設定変更時の天井カウンタ/RT初期状態を直接確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時の天井ゲーム数/RT状態引継ぎを確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみの天井カウンタ/RT/初期出目処理を確定できず。
- `gameCounterReset`: `UNVERIFIED_AFTER_RESEARCH` — 天井RT搭載は確認済みだが設定変更時のカウンタ処理は未確定。
- `ceilingAfterReset`: `UNVERIFIED_AFTER_RESEARCH` — 通常天井の閾値本文と短縮有無/数値を今回回収できず。
- `modeAfterReset`: `NONE_CONFIRMED_OR_UNVERIFIED`。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits` / `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH` — ガックン、初期出目、表示等の本機固有判別条件を確定できず。
- `numericResetData`: リセット天井、モード振り分け、朝一当選率、恩恵発生率は `NONE_CONFIRMED_OR_UNVERIFIED`。

## 今回の主要出典

取得日: 2026-09-02

### 天晴招猫
- https://p-kn.com/topics/news/618/
  - 2008-09-03当時業界ニュース。ホール導入10月上旬予定、小役優先制御、2828通りのリーチ目/チャンス目、天井RT搭載。
- https://www.p-world.co.jp/machine/database/5309
  - 型式名アッパレマネキネコV、検定番号8S0324、2008年10月導入。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/30/h.php
  - 設定別赤7BIG/猫BIG/BIG合成/REG/総合算、simulation PAYOUT。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/30/c.php
  - 1000円あたり37.10〜39.06G。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/30/a.php
  - 天井RT、BIG約312枚、REG約117枚、規定払い出し条件。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/30/ema_slot_30.php
  - 「天井RTについて」「攻め時・ヤメ時・設定変更時」専用解析項目の存在確認。本文値は今回回収不能のため推測転記しない。
- https://p-kn.com/slot/859/
  - 天井RT搭載、小役優先制御、BIG/REG規定払い出し条件の独立確認。
- https://5goki.com/ema
  - 2008年10月導入、機械割97.9〜112.0%の独立系列。

### 10月境界監査
- https://news.p-world.co.jp/articles/3031/greenbelt
  - 藤商事 `アカギ～永続の闘牌～` は2008-10-14より納品。

## 境界監査・重複防止

- **既存301件の再追加禁止。**
- 2008-10-05は `豊漁` / `バウンティキラー` を処理済み。`逆境ナイン` は2008-10月精度で299登録済み。
- `天晴招猫` は「10月上旬導入予定」のため301として月精度登録済み。
- `アカギ～永続の闘牌～` は一次業界資料で **2008-10-14納品開始** を確認済み。
- `天地を喰らう` と `まつり屋華恋` は一次業界資料で **2008-10-19納品開始予定** を確認済み。
- `ハードボイルド～グリフォンの幻影～` は **2008-11-03納品予定** のため10月群へ混入させない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準301件地点。次は2008年10月上旬〜13日の残候補を再監査。**
2. `完熟ちぇりー / 赤ジャック / 赤ジャック-30 / クローズ武装戦線` の具体納品・初回ホール導入日を優先して比較する。月精度しか得られない場合は日付を捏造せず、一次/当時資料で「上旬」「中旬」等の相対順が取れるものを優先。
3. 10月13日以前の具体日付き未処理機がなければ、**2008-10-14 `アカギ～永続の闘牌～`** を次の本線として処理する。
4. その後10月15〜18日を再監査し、未処理がなければ **2008-10-19 `天地を喰らう` / `まつり屋華恋`** の同日群へ進む。
