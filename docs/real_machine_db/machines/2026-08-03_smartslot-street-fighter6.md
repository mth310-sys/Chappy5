# スマスロ ストリートファイター6

recordNo: 1814
machineName: スマスロ ストリートファイター6
aliases: Lストリートファイター6 / スト6
manufacturer: レオスター（エンターライズグループ）
formalModel: Lストリートファイター6SB
inspectionNumber: 6S0125
releaseDate: 2026-08-03
generation: 6.5号機 / スマスロ
systemType: AT / 自力バトルST＋疑似ボーナス
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- エンターライズ公式機種一覧で2026年8月導入・ATを確認。
- 遊技通信/P-WORLD業界ニュースで型式 `Lストリートファイター6SB`、レオスター製を確認。
- HAZUSEで型式 `Lストリートファイター6SB`、検定番号 `6S0125`、2026-08-03導入を確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.4%
- setting2: 98.4%
- setting3: 100.4%
- setting4: 103.2%
- setting5: 106.1%
- setting6: 110.0%
initialHitBySetting:
  FB:
  - setting1: 1/278.6
  - setting2: 1/272.1
  - setting3: 1/264.6
  - setting4: 1/258.9
  - setting5: 1/255.3
  - setting6: 1/252.6
  bonus:
  - setting1: 1/487.6
  - setting2: 1/473.3
  - setting3: 1/447.2
  - setting4: 1/425.6
  - setting5: 1/405.9
  - setting6: 1/389.9
baseGamesPer50: 約32G/50枚（設定1）
netIncrease: 約6.0枚/G（疑似ボーナス）
basicPayout:
- ファイターズバトル: 15G+α、自力バトルST、小役約1/2.9。
- 赤7 フィニッシュブロー: 平均払い出し約273枚（最低150枚）。
- 青7 フィニッシュコンボ: 平均払い出し約521枚（最低300枚）。
- レジェンドランク: FB勝率約88%超、ボーナス平均払い出し約500枚、期待約2700枚（解析値）。
modeSpecificMinimumData:
- 通常時モード: 通常A / 通常B / 通常C / 天国。
- FB間天井: 液晶最大1000G+α（実ゲーム平均約470G）でFB当選濃厚。
- モード別最大液晶G: 通常A 1000G+α / 通常B 900G+α / 通常C 800G+α / 天国 200G+α。
- FB回数天井: 最大3スルー後、4回目FBは勝利濃厚状態。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間・天井/液晶ゲーム数・内部モード・内部状態をRESET/再抽選。
- 朝一モードは通常B以上濃厚。約25%で天国スタート。
- 設定変更後初回FBはブロンズランク以上の選択率が優遇される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は前日の天井/液晶ゲーム数・内部モード・内部状態を引継ぐ解析資料が複数一致。
- 有利区間も据え置き時引継ぎとして解析資料で確認。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみでは天井/液晶ゲーム数・内部モード・内部状態を引継ぐ。
- 純電断時の有利区間そのものを直接明記した高優先機種固有資料は今回固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 開始ステージは調査中。
confidence: ANALYSIS_HIGH_FOR_COUNTER_MODE_STATE / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION_DIRECT_WORDING

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalMaximum: 液晶1000G+α（通常A、実ゲーム平均約470G）
resetMaximum: 液晶900G+α（通常B以上濃厚のため）
resetChanceCeiling: 約25%で天国＝液晶200G+α
note: 設定変更時に固定900G天井となるのではなく、通常B/通常C/天国の再抽選結果で最大天井が変わる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は通常B以上濃厚。
- 約25%で天国スタート。
- 通常Bと通常Cの個別振り分け率は十分な再探索後も公開固定値を確認できず `PUBLIC_EXACT_SPLIT_NOT_FOUND_AFTER_RESEARCH`。
- 電源OFF→ON/据え置きでは内部モード引継ぎ。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時: RESET/再抽選。
- 据え置き: 引継ぎ。
- 電源OFF→ON: 引継ぎ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更時: RESET（複数解析資料）。
- 据え置き: CARRY_OVER（解析資料）。
- 電源OFF→ONのみ: `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 通常営業中のエンディング消化後/規定枚数到達時の有利区間リセットではレジェンドランクでFBへ移行するが、これを朝一設定変更恩恵と同一視しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- 通常Aが除外され通常B以上スタート濃厚となるため、液晶最大天井が1000G+α→900G+α以下へ実質短縮。
- 約25%で天国（液晶200G+α）。
- 設定変更後初回FBはブロンズランク以上の選択率優遇。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更専用の明示的な冷遇・天井延長は `NONE_CONFIRMED_AFTER_RESEARCH`。
- エンディング等の通常有利区間切断時レジェンド恩恵は設定変更時の朝一恩恵として確認されていないため混入しない。
confidence: NONE_CONFIRMED / ANALYSIS_HIGH

### resetDetection
- 現時点で有効な即時リセット判別方法は未判明と複数解析資料が明記。
- 液晶G数/内部挙動は設定変更時RESET、純電断/据え置きで引継ぐため、前日情報と照合できる場合は事後推測材料。
- 本機固有ガックン条件/発生率は機種名・型式・メーカー・設定変更/リセット/朝一/ガックン等で再探索したが `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_KNOWN_IMMEDIATE_METHOD / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetModeFloor: 通常B以上濃厚
resetHeavenRate: 約25%
normalModeMaximumCeilings:
- normalA: 1000G+α
- normalB: 900G+α
- normalC: 800G+α
- heaven: 200G+α
resetMaximumCeiling: 900G+α
resetHeavenCeiling: 200G+α
firstFBResetBenefit: ブロンズランク以上選択率優遇（具体率未公開）
publicMorningData:
- フリック7朝一実践値: 実践サンプル4,163件・延べ47,778区間、朝一初回AT間50G区間平均AT当選率8.70%。純リセット限定かつメーカー公表値ではないため観測値として分離保存。
- スロベース通常天井期待値表: 実G 0G 等価-541円 / 100G +572円 / 200G +1,997円。記事上の通常天井期待値であり純リセット専用値ではないため朝一期待値としては採用しない。
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / OBSERVATIONAL_FOR_MORNING_SAMPLE

## conflicts
- メーカー表記は業界一次/HAZUSEでレオスター製、エンターライズ公式でも同機を掲載。二次資料の「エンターライズ」単独表記はブランド/グループ整理として扱い、formal manufacturerはレオスターをcanonicalとする。
- 有利区間リセット後レジェンド移行は通常営業中の切断契機についての情報で、設定変更時の朝一契約へ転記しない。
- 一部解析ページに「設定変更後モード振り分け未公開」とあるが、別の複数解析では通常B以上・約25%天国まで公開。個別B/C率のみ未公開として正規化。

## missingFields
- 設定変更時の通常B/通常C個別振り分け率
- 設定変更後初回FBのブロンズ以上具体選択率
- 電源OFF→ON時の有利区間そのものの直接表記
- 設定変更/電源OFF→ON時の開始ステージ
- 本機固有ガックン条件/発生率
- 純リセット台限定の0G期待値（高優先固定値）

## sources
retrievedAt: 2026-09-15
- エンターライズ公式機種ページ: https://enterrise.co.jp/slot/sf6/
- エンターライズ公式機種一覧: https://www.enterrise.co.jp/slot.php
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/34093/yugitsushin
- HAZUSE: https://hazuse.com/machine/pachislot/6S0125/
- G-net販売概要: https://g-net-ps.com/info/s0286/
- パチビー: https://www.pachibee.jp/machines/kouryaku/226060014
- グリーンべると: https://web-greenbelt.jp/post-115861/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-78414/
- 必勝本 対戦相手抽選: https://hisshobon.com/machineinfo/140556/
- ジャグラーズネット: https://jugglersnet.com/chumoku/street-fighter6
- 6確: https://www.kaku6.jp/slot/streetfighter6/
- スロベース: https://slobase.jp/machines/street-fighter6
- フリック7朝一: https://flick7.net/slot/street_fighter6/reset/
- うちどころ: https://uchidokoro.com/machines/sf6/
