# S笑ゥせぇるすまん 絶笑

No: 1369
machineName: S笑ゥせぇるすまん 絶笑
machineNameVariants: S笑ゥせぇるすまん絶笑 / 笑ゥせぇるすまん絶笑 / 笑うセールスマン絶笑 / S笑ゥせぇるすまん絶笑SJ
manufacturer: サンスリー / SANYO GROUP
releaseDate: 2020-10-05
formalModelName: S笑ゥせぇるすまん絶笑SJ
certificationNumber: UNVERIFIED_AFTER_RESEARCH

generation: 6号機
systemType: AT / 差枚数管理型AT / CZ+ゲーム数解除 / 有利区間管理

## identity / release
- SANYO公式の2020年パチスロ製品一覧で「S笑ゥせぇるすまん 絶笑」を確認。
- 遊技通信/P-WORLD業界ニュースはサンスリー製、2020-10-05ホール導入予定と報道。
- 複数解析資料でも2020-10-05導入で一致。
- 型式は `S笑ゥせぇるすまん絶笑SJ` を複数資料で確認。
- reliability: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.7% |
| 2 | 98.9% |
| 3 | 101.5% |
| 4 | 104.8% |
| 5 | 108.0% |
| 6 | 110.8% |
- なな徹、導入時業界向けスペック資料、複数解析で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
AT「ドンドンRUSH」初当たり:
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/346.0 |
| 2 | 1/330.7 |
| 3 | 1/301.6 |
| 4 | 1/262.5 |
| 5 | 1/231.3 |
| 6 | 1/221.0 |
- なな徹、必勝本、複数解析で一致。
- 補助値: CZ「福ZONE」初当たりは設定1 1/211.7 ～ 設定6 1/280.6。CZは高設定ほど軽くなる構造ではないためAT初当たりと定義を混同しない。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約50.5G/50枚。
- なな徹、導入時スペック資料、後発攻略資料で一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT純増 約2.8枚/G。
- メーカー発表を伝える業界記事、必勝本、なな徹、P-WORLDで一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- AT「ドンドンRUSH」は差枚数管理型。
- AT初当たり時は必ず「ドンドンATTACK」を経由して初期差枚数を決定。
- 必勝本公開値ではAT初当たり時の期待獲得枚数（全設定共通）は通常AT 約290枚 / 真AT 約610枚 / 極AT 約1040枚。
- 最上位初期枚数決定ゾーン「千日千笑」は業界発表で1500枚超の上乗せ期待。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は規定ゲーム数解除とCZ「福ZONE」からATを目指す。
- ゲーム数管理モードは通常A / 通常B / 引き戻し / 天国。
- モード別最大天井: 通常A 699G / 通常B 499G / 引き戻し 449G / 天国 99G。
- 有利区間移行時の天国モード移行率は全設定共通20.3%。
- 293G到達時はCZ抽選状態が必ず高確へ移行する公開仕様があり、朝一リセット判別にも利用される。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMERIC_DATA
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井ゲーム数RESET（液晶上0G）。
- 有利区間RESET。
- 液晶ステージは駅前通りから開始。
- 有利区間移行時に通常時モードを再抽選する。
- 笑ゥポイントは有利区間移行時に初期ポイント再抽選。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は設定変更を伴わない電源OFF→ONと同系統として、内部天井ゲーム数・有利区間をCARRY_OVERする。
- 液晶ゲーム数は0G表示へ戻るため、表示だけでは内部天井進行を判別できない。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON時は天井ゲーム数を引き継ぐ一方、液晶上は0G表示。
- 有利区間は引き継ぐ。
- 液晶ステージは駅前通り。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 内部天井G RESET。
- 据え置き / 純電源OFF→ON: 内部天井G CARRY_OVER。
- 液晶表示はどちらも朝一0G系となるため、表示G数と内部G数を分離して扱う。

### ceilingAfterReset
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後は有利区間移行時にモード再抽選され、天国なら最大99G。
- 通常A最大699G / 通常B最大499G / 引き戻し最大449G / 天国最大99G。

### modeAfterReset
- 設定変更後は有利区間移行時に通常A / 通常B / 引き戻し / 天国を再抽選。
- 天国移行率は全設定共通20.3%。
- 据え置き / 純電源OFF→ONでは有利区間・内部進行を引き継ぐため、設定変更時の新規有利区間移行抽選は発生しない扱い。
- reliability: ANALYSIS_HIGH

### stateAfterReset
- 液晶ステージは設定変更・純電断とも駅前通り。
- CZ抽選状態（通常1 / 通常2 / 高確）の設定変更時の詳細初期振り分けは、検索語と資料系統を変えて再探索したが本機固有の公開表を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 293G到達時は必ず高確へ移行するため、リセット/据え置き判別の補助材料になる。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 通常時は有利区間ランプが基本消灯する仕様とされ、消灯だけでは設定変更判別不可。
- 朝一ランプ点灯なら据え置き濃厚材料だが、消灯は設定変更確定材料ではない。

### resetBenefits
- 設定変更後は新しい有利区間へ移行し、全設定共通20.3%で天国モード（最大99G）へ移行。
- 固定の天井短縮やAT直撃保証は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- `NONE_DIRECTLY_PUBLISHED`。
- 据え置きなら保持される天井進行や有利区間内の蓄積要素が設定変更でリセットされる点はあるが、設定変更固有の定量的不利として公表された数値は確認できない。

### resetDetection
- 通常時は有利区間ランプが基本消灯のため、朝一消灯だけでは設定変更判別不可。
- 朝一有利区間ランプ点灯は据え置き濃厚材料。
- 293GのCZ高確移行タイミングと前日ゲーム数を組み合わせることで据え置き/リセット推測が可能。
- 当日ゾーンと前日+当日累積ゲーム数の当選位置も補助判別材料になる。
- 本機固有のガックン条件/発生率は表記揺れ・型式名・メーカー名を含め再探索後も直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 有利区間移行時の天国モード移行率: **20.3%（全設定共通）**。
- 天国モード最大天井: **99G**。
- 通常A / 通常B / 引き戻しの最大天井: **699G / 499G / 449G**。
- 通常ゲーム数293G到達時: CZ抽選状態が必ず高確へ移行。

## resetBehavior 再探索メモ
2026-09-11。`S笑ゥせぇるすまん絶笑 / 笑ゥせぇるすまん 絶笑 / 笑うセールスマン絶笑 / S笑ゥせぇるすまん絶笑SJ / サンスリー / SANYO` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 有利区間 / 有利区間ランプ / 293G` を組み替え、SANYO公式、P-WORLD業界ニュース、1geki、なな徹、必勝本、P-WORLD機種DB、当時攻略記事、後年攻略整理を横断。設定変更と純電断の天井/有利区間差、天国移行率、293G高確移行、ランプ判別限界まで固定。本機固有ガックンとCZ状態の設定変更時詳細振り分けは固定できず推測補完しない。

## conflicts
- certificationNumber: 型式名 `S笑ゥせぇるすまん絶笑SJ` は複数資料で確認できたが、今回アクセス可能な高信頼資料から検定番号を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプについて「設定変更=消灯 / 電断=基本消灯」とする攻略表と、「点灯なら据え置き濃厚・通常時基本消灯なので消灯では判別不可」という説明は矛盾ではなく、通常時消灯仕様による判別限界として統合。

## sources
取得日: 2026-09-11

1. SANYO公式 パチスロ機種一覧
   - https://www.sanyobussan.co.jp/products/slot.html
   - 2020年製品として本機を確認。
   - reliability: OFFICIAL
2. 遊技通信 / P-WORLD業界ニュース
   - https://news.p-world.co.jp/articles/14342/yugitsushin
   - サンスリー製、純増約2.8枚/G、2020-10-05導入予定を確認。
   - reliability: INDUSTRY
3. なな徹 基本情報 / ボーナス確率・機械割 / 通常時モード / 天井
   - https://nana-press.com/kaiseki/machine/81/
   - https://nana-press.com/kaiseki/machine/81/1760/
   - https://nana-press.com/kaiseki/machine/81/1849/
   - https://nana-press.com/kaiseki/machine/81/1763/
   - 出玉率、AT初当たり、ベース、純増、モード/天井、天国20.3%を確認。
   - reliability: ANALYSIS_HIGH
4. 1geki 天井・設定変更 / モード / 笑ゥポイント
   - https://1geki.jp/slot/s_warau_z/3/
   - https://1geki.jp/slot/s_warau_z/44/
   - https://1geki.jp/slot/s_warau_z/45/
   - 設定変更時天井RESET、純電断時天井CARRY_OVER、ステージ、モード天井、有利区間移行時ポイント再抽選を確認。
   - reliability: ANALYSIS_HIGH
5. 必勝本 基本スペック / AT解説
   - https://p.hisshobon.jp/machine/3564/1/79348
   - https://p.hisshobon.jp/machine/3564/1/79357
   - AT初当たり、純増、通常/真/極AT期待獲得枚数を確認。
   - reliability: ANALYSIS_HIGH
6. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/9230
   - サンスリー、6号機AT、純増、通常モード、293G高確移行、有利区間移行時モード/ポイント仕様を照合。
   - reliability: INDUSTRY / ANALYSIS_HIGH
7. スロットセブン 朝一リセット整理
   - https://slot-seven.com/warausalesmanzessyou-tenzyou/
   - 天井/有利区間の変更・電断差、ランプ判別限界、293Gを用いたリセット判別を確認。
   - reliability: ANALYSIS_SINGLE
8. 当時業界向け導入スペック整理
   - https://ameblo.jp/modeone/entry-12612392278.html
   - 型式表記、純増、AT初当たり、機械割、50枚ベース、納品時期を照合。
   - reliability: ANALYSIS_SINGLE

missingFields:
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- setting-change-specific CZ state distribution: UNVERIFIED_AFTER_RESEARCH
- machine-specific reel-gakkun condition/rate: UNVERIFIED_AFTER_RESEARCH
