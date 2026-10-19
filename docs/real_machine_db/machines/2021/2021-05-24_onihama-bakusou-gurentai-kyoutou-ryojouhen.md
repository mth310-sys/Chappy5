# 鬼浜爆走紅蓮隊 狂闘旅情編

No: 1414
machineName: 鬼浜爆走紅蓮隊 狂闘旅情編
machineNameVariants: 鬼浜爆走愚連隊 狂闘旅情編 / S鬼浜爆走紅蓮隊 狂闘旅情編 / S鬼浜 狂闘旅情編
manufacturer: ベルコ
releaseDate: 2021-05-24
formalModelName: Sオニハマ4H2
certificationNumber: 0S1405

generation: 6.1号機
systemType: AT / ゲーム数管理型 / 2段階継続AT

## identity / release
- ベルコ公式で2021年5月登場、6.1号機として発売されたことを確認。
- P-WORLDで型式 `Sオニハマ4H2`、検定番号 `0S1405`、導入開始2021-05-24を確認。
- 2021-03-18業界記事では納品開始2021-05-23、販売予定約3,000台。ホール導入日は2021-05-24をcanonicalとする。
- reliability: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.6% |
| 2 | 98.4% |
| 3 | 101.3% |
| 4 | 104.9% |
| 6 | 108.2% |
| L | 80.5% |
- 設定1〜6はP-WORLD・複数解析資料で一致。設定5は非搭載。
- 設定L 80.5%は当時解析資料で確認。通常営業用ではない低出率設定として分離保持。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
### AT「ツッパリRUSH」初当たり
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/301.0 |
| 2 | 1/298.5 |
| 3 | 1/281.4 |
| 4 | 1/254.5 |
| 6 | 1/230.9 |
| L | UNVERIFIED_AFTER_RESEARCH |
- P-WORLD・複数解析資料で設定1/2/3/4/6が一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約40G/50枚。
- 複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT純増: 約2.8枚/G。
- ベルコ公式・業界記事・P-WORLD・複数解析資料で整合。
- reliability: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## basicPayout
- AT「ツッパリRUSH」: 1セット30G+α、初回継続バトル勝利期待度約50%。
- 継続成功後の「真ツッパリRUSH」: 1セット30G+α、継続期待度約80%、獲得期待枚数約620枚（業界発表）。
- 「天下無敵ボーナス」: AT中30Gの擬似ボーナス。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はモードA〜Gで規定ゲーム数/CZ「カッ飛びZONE」および天井を管理。
- 通常時最大天井は768G+αでAT当選。最深天井はA〜D=768G、E=512G、F=384G、G=128G。
- CZ「カッ飛びZONE」の平均AT期待度は約40%。
- 128GまでのAT期待度は全モードを含む機種説明上約50%だが、これは設定変更専用値ではないためreset numericには混在させない。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_APPLICABLE_RESET_CORE
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 有利区間: RESET。
- 天井G数: RESET。
- 内部状態: 再抽選。
- 真・鬼メーター: RESET。
- 液晶ステージ: 虎水寺ステージから開始。
- 設定変更後の75%で専用の天井ゲーム数振り分けを使用し、最深天井が512G+αへ短縮される。
- reliability: ANALYSIS_HIGH（パチマガスロマガ / なな徹 / HAZUSE / 1geki等を横断）

### carryOverBehavior
- 据え置き時は天井進行、有利区間、内部状態を引き継ぐ。
- 真・鬼メーターは見た目上リセットされるが内部的には引き継ぐ。
- 朝一液晶ステージは設定変更時と同じ虎水寺ステージのため、液晶だけでは据え置き/変更を判別できない。

### powerCycleBehavior
- 電源OFF→ONのみでは天井G数、有利区間、内部状態を引き継ぐ。
- 真・鬼メーターは表示上リセットされるが内部的には引き継ぐ。
- 液晶は虎水寺ステージから開始。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電断: CARRY_OVER。
- 通常最大天井768G+α。

### ceilingAfterReset
- 設定変更後の約75%で専用天井振り分けとなり、最深512G+α。
- 専用テーブル時の公開値:
  - モードA〜D: 193〜256G 0.8% / 321〜384G 0.8% / 449〜512G 98%（公表値をそのまま保持。丸め合計は100%未満）。
  - モードE: 193〜256G 10% / 321〜384G 40% / 449〜512G 50%。
  - モードF: 193〜256G 10% / 321〜384G 90%。
  - モードG: 〜128G 100%。
- 残り約25%は通常の天井振り分け側。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 通常時モードA〜Gは有利区間移行後のゲーム数管理に関与。
- 設定変更時専用として固定された「モード選択率」そのものは今回の再探索で高信頼の直接記述を固定できなかったため、通常時モード移行率を朝一専用率として流用しない。
- 天井振り分けのみ設定変更後75%専用テーブルを別途記録。

### stateAfterReset
- 設定変更: 内部状態を再抽選。
- 据え置き / 純電断: 内部状態を引き継ぐ。
- 真・鬼メーターは設定変更でリセット、純電断/据え置きでは内部的に引き継ぐ。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き / 純電断: CARRY_OVER。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 最大の公開恩恵は、設定変更後約75%で専用天井テーブルとなり最深512G+αへ短縮されること。
- モードGなら専用テーブル時128Gまでに天井到達。
- 朝一液晶は変更/据え置き共通挙動なので、演出画面だけでは変更判別恩恵を確定できない。

### resetPenalties
- 設定変更専用の主要な定量的不利要素は確認できず。
- 真・鬼メーターはリセットされるため、据え置きなら内部的に保持され得るメーター蓄積を設定変更時は失う。

### resetDetection
- 液晶: 設定変更・据え置き/電断のいずれも虎水寺ステージ開始、鬼メーターも見た目上リセットされるため判別不可。
- 有利区間ランプ: 通常時点灯型。朝一が点灯なら据え置き濃厚、消灯なら設定変更濃厚。ただし前日消灯閉店・店側対策等の例外あり。
- 本機固有のリールガックンによる確定判別条件は、機種名表記揺れ・型式名・ベルコ・設定変更/リセット/朝一/ガックンで再探索しても高信頼の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更後専用天井テーブル選択: 約75%。
- 専用テーブル時の最深天井: 512G+α。
- 専用天井振り分けは `ceilingAfterReset` に記録。
- 設定変更専用の朝一AT当選率そのものは、通常時の「128GまでのAT期待度約50%」と定義を混同しないため未採用。

## missingFields
- 本機固有のガックン条件/発生率。
- 設定変更時だけに適用されるモードA〜G選択率の直接資料（通常時モード移行率は確認できるが朝一専用率として流用しない）。
- 設定LのAT初当たり確率。

## conflicts
- 機種名が資料により「鬼浜爆走紅蓮隊」「鬼浜爆走愚連隊」と表記揺れ。ベルコ公式・P-WORLDの「紅蓮隊」をcanonicalとする。
- 設定変更後専用天井テーブルのA〜D公表値は0.8%+0.8%+98%=99.6%となるが、資料値を平均/補正せず公表表記のまま保持。

## sources
取得日: 2026-09-12
- https://www.s-bellco.co.jp/products/slot/onihama-kyou/ — ベルコ公式、2021年5月、6.1号機、ゲーム性
- https://www.s-bellco.co.jp/news/20210311_01/ — ベルコ公式発売告知、6.1号機、5月納品予定
- https://www.p-world.co.jp/machine/database/9364 — 型式Sオニハマ4H2、検定0S1405、2021-05-24、AT確率、機械割、純増
- https://www.yugitsushin.jp/news/maker/20210318-1146/ — 当時業界記事、純増約2.8枚/G、1セット30G+α、上位約80%/期待620枚、納品5/23
- https://chonborista.com/slot/belko-slot/134651/ — スペック、AT確率、ベース、天井、設定変更75%短縮
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/107/kr01.php — 朝一設定変更/電断、有利区間・天井・状態・鬼メーター、75%短縮
- https://nana-press.com/kaiseki/machine/124/3742/ — 設定変更/電断の天井・状態・鬼メーター・ステージ照合
- https://nana-press.com/kaiseki/machine/124/3741/ — 約40G/50枚
- https://hazuse.com/machine/pachislot/0S1405/genre/207/ — 天井、設定変更/電断挙動照合
- https://hazuse.com/machine/pachislot/0S1405/genre/209/ — 設定変更時75%専用天井振り分け公開値
- https://slot-seven.com/onihamabakusogurentaikyo-tenzyou/ — 有利区間ランプによる朝一判別の照合
- https://slothack.net/matome/3346/ — 設定変更約75%天井短縮、有利区間ランプ判別の別系統照合

## researchNotes
- `鬼浜爆走紅蓮隊 狂闘旅情編` / `鬼浜爆走愚連隊 狂闘旅情編` / `S鬼浜` / `Sオニハマ4H2` / `0S1405` / `ベルコ` と、`設定変更` / `リセット` / `朝一` / `据え置き` / `電源OFF ON` / `天井短縮` / `モード` / `ガックン` / `有利区間ランプ` を組み替えて再探索。
- メーカー公式、P-WORLD、当時業界記事、パチマガスロマガ、なな徹、HAZUSE、1geki、当時攻略記事を横断。
- 実機完全再現用の通常時全モード移行/小役別抽選は収集対象外とし、設定変更専用公開値のみ保存。
