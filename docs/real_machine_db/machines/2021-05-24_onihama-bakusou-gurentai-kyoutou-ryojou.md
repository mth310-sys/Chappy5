# 鬼浜爆走紅蓮隊 狂闘旅情編

No: 1414
machineName: 鬼浜爆走紅蓮隊 狂闘旅情編
machineNameVariants: S鬼浜爆走紅蓮隊 狂闘旅情編 / 鬼浜爆走愚連隊 狂闘旅情編
manufacturer: ベルコ
releaseDate: 2021-05-24
formalModelName: Sオニハマ4H2
certificationNumber: 0S1405

generation: 6.1号機
systemType: AT / ゲーム数管理 / CZ・AT

## identity / release
- HAZUSE機種DBで型式 `Sオニハマ4H2`、検定番号 `0S1405`、導入開始2021-05-24、6.1号機ATを確認。
- K-Navi、当時解析資料でも2021-05-24導入と一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.6% |
| 2 | 98.4% |
| 3 | 101.3% |
| 4 | 104.9% |
| 6 | 108.2% |
- 設定Lが存在する資料もあるが通常営業用の比較軸からは分離し、1/2/3/4/6を性能物差しとして採用。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/301.0 |
| 2 | 1/298.5 |
| 3 | 1/281.4 |
| 4 | 1/254.5 |
| 6 | 1/230.9 |
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約40G/50枚。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT / 疑似ボーナス区間: 約2.8枚/G。
- reliability: ANALYSIS_HIGH

## basicPayout
- 出玉はAT「ツッパリRUSH」および上位AT「真ツッパリRUSH」を中心に獲得するため、固定枚数ボーナス1個を物差しにするノーマル型ではない。
- 初回ツッパリRUSH突破後に真ツッパリRUSHへ移行するゲームフロー。

## modeSpecificMinimumData
- 通常時はモードA〜Gの7種類。規定ゲーム数/CZ「カッ飛びゾーン」とAT天井を管理。
- 最深天井: A/B/C/D=768G、E=512G、F=384G、G=128G。
- 通常時最大768G+αでAT「ツッパリRUSH」当選。
- 通常モード振り分けは設定差があり、設定1でA/B/C/D各19.6%、E11.8%、F5.9%、G3.9%。設定6でA16.9%、B16.9%、C16.5%、D20.0%、E12.5%、F8.6%、G8.6%。
- 上記通常モード振り分けと設定変更75%時に参照する専用天井テーブルは別抽選/別定義として保存する。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_75PCT_SHORT_CEILING_TABLE
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 有利区間: RESET。
- 天井: RESET。
- 内部状態: 再抽選。
- 鬼メーター: RESET。
- 朝一ステージ: 虎水寺ステージ。
- 設定変更後の75%で専用天井振り分けを参照し、その場合の最深天井は512G+α。
- reliability: ANALYSIS_HIGH / MULTI_SOURCE

### carryOverBehavior
- 据え置き時は有利区間・天井・内部状態をCARRY_OVER。
- 鬼メーターは液晶上いったん初期表示になるが、内部的にはCARRY_OVER。
- 朝一ステージは設定変更時と同じ虎水寺ステージのため、液晶のみでは変更/据え置き判別不可。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは有利区間・天井・内部状態をCARRY_OVER。
- 鬼メーターも内部的にCARRY_OVERする一方、見た目はリセット表示となる。
- ステージは虎水寺ステージ。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: RESET。
- 据え置き/純電断: 内部天井進行をCARRY_OVER。
- 朝一液晶表示の初期化と内部ゲーム数進行を同一視しない。

### ceilingAfterReset
- 通常最深: 768G+α。
- 設定変更後は75%で専用天井テーブルを参照し、その場合は最大512G+αへ短縮。
- 専用テーブルの公開値: モードA/B/C/Dは256G 0.8%、384G 0.8%、512G 98%（丸めにより合計99.6%表記）。Eは256G 10%、384G 40%、512G 50%。Fは256G 10%、384G 90%。Gは128G 100%。
- 75%非選択時は通常側の天井振り分けを参照するものとして区別。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 設定変更で内部状態は再抽選。
- モードA〜Gの通常モード振り分け自体には設定差があるが、これは「設定変更75%専用天井テーブル」とは別定義。
- 朝一専用モードという名称で固定された別モード群は確認せず、専用天井振り分けとして記録。

### stateAfterReset
- 設定変更: 再抽選。
- 据え置き/純電断: CARRY_OVER。
- 鬼メーターは設定変更でRESET、据え置き/純電断では内部CARRY_OVER。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。

### resetBenefits
- 最大の公開朝一恩恵は、設定変更時の75%で最深512G+αとなる専用天井振り分け。
- 通常時の最深768G+αと比較して明確な短縮恩恵。

### resetPenalties
- 設定変更で前日の天井進行・内部状態・鬼メーター蓄積はRESET。
- それ以外の独立した朝一不利抽選/ペナルティ率は公開値を固定できず、推測補完しない。

### resetDetection
- 朝一は変更/据え置きとも虎水寺ステージ、鬼メーターも見た目上リセットされるため液晶からの変更判別は不可。
- 通常時に有利区間ランプが点灯するタイプとして、朝一点灯=据え置き濃厚、消灯=設定変更濃厚という解析あり。
- ただし前日消灯状態で閉店、店側のランプ対策等では判別不能となるため確定契約にはしない。
- 本機固有ガックンの確定条件/発生率は高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- settingChangeDedicatedCeilingTableSelection: 75%。
- dedicatedCeilingMax: 512G+α。
- A/B/C/D専用天井: 256G 0.8% / 384G 0.8% / 512G 98%（公開値丸め）。
- E専用天井: 256G 10% / 384G 40% / 512G 50%。
- F専用天井: 256G 10% / 384G 90%。
- G専用天井: 128G 100%。

## missingFields
- 本機固有リールガックンの設定変更確定条件/発生率。
- 設定変更75%非選択時について「通常テーブル参照」以上の朝一専用追加数値。

## conflicts
- 機種名に「紅蓮隊」「愚連隊」の表記揺れがある。型式 `Sオニハマ4H2` とベルコ2021年機を同一実体として扱う。
- 一部期待値記事に便宜上「天井800G」とする表記があるが、解析本体は最大768G+αで一致するためcanonicalは768G+α。
- 設定変更75%専用テーブルのA/B/C/D公開値は0.8+0.8+98=99.6%で、丸め誤差とみられる。100%へ再正規化せず公開値をそのまま保持。

## sources
取得日: 2026-09-12
- https://hazuse.com/machine/pachislot/0S1405/genre/201/ — 型式、検定番号、導入日、6.1号機AT、出玉率レンジ、純増
- https://hazuse.com/machine/pachislot/0S1405/genre/207/ — 最大768G+α、モード別天井、設定変更/電断時の天井・状態・鬼メーター
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/107/kr01-1.php — 朝一設定変更/電源OFF→ON、有利区間、75%専用天井、液晶判別不能
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/107/tj04.php — モードA〜G、モード別最深天井
- https://1geki.jp/slot/s_onhm_kyoutou/45/ — 通常モード振り分け、設定変更75%時専用天井振り分けの公開数値
- https://29den.com/onihamakyou/ — 設定別出玉率、AT初当たり、約40G/50枚、純増約2.8枚/G
- https://slot-seven.com/onihamabakusogurentaikyo-tenzyou/ — 有利区間ランプ判別、鬼メーター表示と内部継承の分離
- https://p-kn.com/slot/3578/ — 導入日・AT機種基本情報

## researchNotes
- `鬼浜爆走紅蓮隊` / `鬼浜爆走愚連隊` / `Sオニハマ4H2` / `0S1405` と、`設定変更` / `リセット` / `据え置き` / `電源OFF ON` / `有利区間` / `鬼メーター` / `512G` / `75%` / `朝一` / `ランプ` を組み替えて再探索。
- 通常モード抽選、設定変更専用天井抽選、朝一表示、内部CARRY_OVERをそれぞれ別フィールドとして扱い、液晶初期化から内部リセットを推測しない。
