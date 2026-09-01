# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前は **298 `豊漁`（北電子 / 2008-10-05納品開始）**。
- 今回、handoffで販売開始日とホール導入日の競合要注意だった **299 `逆境ナイン`（三洋物産 / 2008-10・月精度）** を追加。
- さらに10月境界の再監査で、直前298と同日納品の未処理機 **300 `バウンティキラー`（山佐 / 2008-10-05納品予定）** を発見し、漏れ防止のため同リレー内で遡及追加。
- 両機とも性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 299. 逆境ナイン

- record: `docs/real_machine_db/machines/2008-10_gyakkyo-nine.md`
- manufacturer: 三洋物産
- modelNumber: `PS逆境ナインGF`（P-WORLD、検定番号8S0269）
- generation: 5号機
- systemType: ボーナス + CZ + 15G RT
- releaseDate: **2008-10（月精度）**。
- 当時プレイグラフ転載では **2008-09-02時点で「発売を開始」**、9月4日に全国営業所内覧会。一方P-WORLD・5号機クロニクルは実ホール導入を **2008年10月** として一致したため、販売開始報道とホール導入月を分離し、本DBのreleaseDateは2008-10を採用。
- 設定: **1 / 3 / 5 / 6**。
- BIG/CB/REGはいずれも **1/618.26 → 1/500.27**、合成 **1/206.09 / 1/193.32 / 1/179.06 / 1/166.76**。
- 1000円あたり **35.61 / 36.21 / 36.83 / 37.48G**。
- BIG最大純増約300枚 / CHALLENGE約208枚 / REG約104枚。
- CZ中リプレイ入賞で15G RT「全力タイム」、純増約 **0.4枚/G**。RT終了後は再びCZへ。
- 通常時約150〜170GでもCZへ移るが、通常ゲーム数天井とは扱わない。

### CONFLICT（299）

- パチマガスロマガ simulation PAYOUT: **97.11 / 99.99 / 103.56 / 107.11%**。
- 5号機クロニクル: **96.8 / 99.7 / 104.1 / 107.4%**。
- 平均せず別系列として保持。
- P-WORLD掲示板には当時「設定6が107%か111%か」という混乱も残るが、111%系列の根拠表は今回確定できず、数値ソースには採用しない。

### resetBehavior（299）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。パチマガの現存インデックスに「攻め時・ヤメ時・設定変更時」項目はあるが本文回収不能。設定変更時のCZ周期/RT初期状態を直接確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時の約150〜170G CZ周期カウンタ、CZ/RT残状態の引継ぎを直接確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみの周期/CZ/RT/初期出目を確定できず。
- `gameCounterReset`: `UNVERIFIED_FOR_CZ_CYCLE / NOT_APPLICABLE_FOR_NORMAL_CEILING`。
- `ceilingAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。
- `modeAfterReset` / `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits` / `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH` — ガックン、初期出目等の本機固有判別条件を確定できず。
- `numericResetData`: リセット短縮天井・朝一当選率・モード振り分け・恩恵発生率は `NONE_CONFIRMED_OR_UNVERIFIED`。

## 300. バウンティキラー

- record: `docs/real_machine_db/machines/2008-10-05_bounty-killer.md`
- manufacturer: 山佐
- modelNumber: `バウンティキラーC`（P-WORLD / HAZUSE、検定番号6S1046）
- generation: 5号機
- systemType: ボーナス + CZ + 次回ボーナスまでRT（RT中3択メイン役ナビ）
- releaseDate: **2008-10-05**。グリーンべると当時記事で「納品は10月5日からの予定」を確認。298 `豊漁` と同日なので遡及追加。
- 設定: **1 / 2 / 3 / 4**。
- BIG合成 **1/448.88 / 1/414.78 / 1/374.49 / 1/346.75**。
- REG **1/897.75 / 1/829.57 / 1/682.67 / 1/564.97**。
- 総合算 **1/299.25 / 1/276.52 / 1/241.83 / 1/214.87**。
- 1000円あたり **31.80 / 32.05 / 32.31 / 33.31G**。グリーンべるとの約32Gとも整合。
- ボーナス平均純増: HYPER BIG約**406枚** / NORMAL BIG約**330枚** / REG約**80枚**。
- ボーナス後は必ず最大100G「バウンティゾーン」へ。特殊リプレイ成立で次回ボーナスまでRT「バウンティタイム」、純増約 **0.5枚/G**。RT中は3択メイン役をナビし、シングル役一部でパンク。

### CONFLICT（300）

- パチマガスロマガ simulation PAYOUT: **96.32 / 99.55 / 105.64 / 111.24%**。
- HAZUSE: **96.5 / 99.6 / 105.1 / 110.1%**。
- 設定3・4で丸め差を超えるため平均せず保持。
- BIG終了条件はパチマガ **赤7=465枚超 / 白7=375枚超払い出し**、K-Navi **480枚超 / 390枚超** で競合。平均純増406/330枚と整合するパチマガ系列を主系列としつつK-Navi差をレコードに保持。
- 5号機クロニクル山佐ページのバウンティキラー項目には、2008年12月・BIG約260/REG約56枚・`biohazard`/`ウェスカーゾーン` 等、別機種由来とみられる内容混入を確認。`SOURCE_CORRUPTION_SUSPECTED_NOT_USED` として導入時期・性能値には使用しない。

### resetBehavior（300）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。パチマガの「攻め時・ヤメ時・設定変更時」項目は確認したが本文回収不能。本機固有の変更時バウンティゾーン/RT初期状態を確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時のゾーン残G/RT状態引継ぎを確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみのゾーン残G/RT/初期出目を確定できず。
- `gameCounterReset`: `NOT_APPLICABLE_FOR_NORMAL_CEILING / UNVERIFIED_FOR_BOUNTY_ZONE_REMAINING_G`。
- `ceilingAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。
- `modeAfterReset` / `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits` / `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。
- `numericResetData`: リセット専用天井・モード振り分け・朝一当選率・恩恵発生率は `NONE_CONFIRMED_OR_UNVERIFIED`。

## 今回の主要出典

取得日: 2026-09-02

### 逆境ナイン
- https://www.p-world.co.jp/machine/database/5316
  - 型式名PS逆境ナインGF、検定番号8S0269、2008年10月導入、ボーナス払い出し条件。
- https://5goki.com/sanyo
  - 2008年10月導入、機械割96.8〜107.4%の独立系列。
- https://p-mans.blogspot.com/2008/09/
  - 当時プレイグラフ転載。2008-09-02発売開始報道、9月4日全国営業所内覧会。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/07/h.php
  - 設定別BIG/CB/REG/合成、simulation PAYOUT。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/07/c.php
  - 1000円あたり35.61〜37.48G。
- https://p-kn.com/slot/863/7039/
  - 15G RT、純増約0.4枚/G、突入/終了条件。
- https://ameblo.jp/samurai777net/entry-10133038404.html
  - 当時系仕様。CZ契機、RT突入期待度、最大純増300/208/104枚。

### バウンティキラー
- https://web-greenbelt.jp/00003809/
  - 当時業界一次。2008-10-05納品予定、最大100G高確率ゾーン、次回ボーナスまでRT、純増約0.5枚/G、平均406/330/80枚、約32G/1000円。
- https://www.p-world.co.jp/machine/database/5301
  - 型式名、設定別BIG/REG/合算。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/159/h.php
  - 精密ボーナス確率、simulation PAYOUT96.32〜111.24%。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/159/c.php
  - 1000円あたり31.80〜33.31G。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/159/a.php
  - 基本システム、規定払い出し、純増406/330/80枚。
- https://hazuse.com/machine/pachislot/6S1046/
  - 型式/検定番号、設定別確率照合、機械割96.5〜110.1%。
- https://p-kn.com/slot/861/
  - 設定別確率照合、100Gゾーン/RT構造。BIG払い出し条件は競合として保持。

## 境界監査・重複防止

- **既存300件の再追加禁止。**
- 2008年9月群は297 `チキチキボカン` まで処理済み。`逆境ナイン` は9月に販売開始報道があるが、実ホール導入は複数DB一致で2008年10月として299登録済み。
- 2008-10-05は298 `豊漁` と300 `バウンティキラー` を処理済み。
- `バウンティキラー` の後年5号機クロニクル項目は別機種内容混入が明白なため、同ページ値を今後のQAで無批判に採用しない。
- `ザ・ブルーハーツG` は通常版との独立型式/独立市場投入根拠が解消するまで別レコード追加しない。
- `天地を喰らう` と `まつり屋華恋` はグリーンべるとで **2008-10-19納品開始予定** を確認済み。
- `ハードボイルド～グリフォンの幻影～` は **2008-11-03納品予定** のため10月群へ混入させない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準300件地点。2008-10-05同日群は `豊漁` / `バウンティキラー` まで回収済み、`逆境ナイン` は2008-10月精度で登録済み。**
2. 2008年10月6〜18日の残候補を再監査し、`完熟ちぇりー / 赤ジャック / 赤ジャック-30 / クローズ武装戦線 / アカギ～永続の闘牌～ / 天晴招猫` の具体納品・初回ホール導入日を優先して比較する。
3. 月精度しか得られない機種は日付を捏造せず月精度で登録する。ただし一次業界資料で具体日が取れる候補を先に処理し、漏れ防止を優先する。
4. 10月19日は `天地を喰らう` と `まつり屋華恋` の同日群が一次業界資料で確定済み。10月6〜18の具体日付き未処理機を閉じた後に進む。
5. resetBehaviorは新規機種ごとに設定変更/据え置き/電源OFF→ON/ゲーム数・天井/モード・状態/有利区間/朝一恩恵・不利/変更判別/公開朝一数値を確認し、一般論で補間しない。