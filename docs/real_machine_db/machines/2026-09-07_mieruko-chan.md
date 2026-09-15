# No.1822 パチスロ 見える子ちゃん

status: COMPLETE_CORE_WITH_RESET_RESEARCH
retrievedAt: 2026-09-15

machineName: パチスロ 見える子ちゃん
manufacturer: ピーセカンド製造 / パイオニア
formalModel: L見える子ちゃんSC
releaseDate: 2026-09-07
generation: 6.5号機 / スマスロ
systemType: AT（CZ→疑似ボーナス）
settings: 1 / 2 / 3 / 4 / 5 / 6
payoutRateBySetting: 97.8% / 98.8% / 101.3% / 105.1% / 110.2% / 114.9%
initialHitBySetting:
- BIG合算: 1/266.5 / 1/261.9 / 1/253.4 / 1/243.1 / 1/234.2 / 1/227.1
- REG: 1/275.1 / 1/270.6 / 1/261.1 / 1/250.0 / 1/240.4 / 1/233.6
- ボーナス合算: 1/135.4 / 1/133.1 / 1/128.6 / 1/123.3 / 1/118.6 / 1/115.1
baseGamesPer50: 約30.8G/50枚（必勝本解析では約30.0G/50枚の別表記あり）
netIncrease: 疑似ボーナス 約6.7枚/G
basicPayout:
- 超BIG BONUS: 45G、約300枚
- BIG BONUS: 30G、約200枚
- REGULAR BONUS: 15G、約100枚

## resetBehavior v0.7
resetQaStatus: COMPLETE_WITH_PARTIAL_UNVERIFIED_FIELDS
settingChangeBehavior:
- 設定変更時は有利区間・天井・内部状態をRESETとする機種固有比較資料あり。
- 通常900G+αのボーナス天井が600G+αへ短縮。
- 液晶ゲーム数表示は0Gから開始。内部加算の可能性を示す資料があるが確定解析ではないため推測値として採用しない。
carryOverBehavior:
- 据え置きは設定変更を伴わない運用として天井・内部状態を引き継ぐ方向。
- ただし据え置き単独の高優先三者直接比較は十分な再探索後も固定できずSECONDARY_SUPPORTED_NOT_DIRECTLY_FIXED。
powerCycleBehavior:
- 電源OFF→ONのみ: 有利区間・天井・内部状態を引き継ぐとする複数の機種固有比較あり。
- 液晶ゲーム数表示は0Gへ戻るが、内部ゲーム数は引き継ぐ。
gameCounterReset:
- 設定変更: 天井ゲーム数RESET、600G+αへ短縮。
- 電源OFF→ON: 内部天井ゲーム数CARRY_OVER、液晶表示は0G。
- 据え置き: 引継ぎ方向だが直接三者比較強度はSECONDARY_SUPPORTED。
ceilingAfterReset:
- 通常ボーナス天井: 900G+α。
- 設定変更後: 600G+αへ短縮。
- 到達恩恵: ボーナス当選。
modeAfterReset:
- 朝一専用モードまたは設定変更時モード振り分けの確定公開値は多語再探索後もUNVERIFIED_AFTER_RESEARCH。
stateAfterReset:
- 設定変更: RESET。
- 電源OFF→ON: CARRY_OVERとする機種固有比較あり。
- 具体的な朝一状態振り分けはUNVERIFIED_AFTER_RESEARCH。
advantageousSectionReset:
- 設定変更: RESET。
- 電源OFF→ON: CARRY_OVERとする機種固有比較あり。
- エンディング終了後も有利区間リセットとする解析があり、その後の祈願チャレンジ移行は実戦上確認。ただし設定変更時は祈願チャレンジ恩恵の対象外。
resetBenefits:
- ボーナス天井900G+α→600G+αへ300G短縮。
resetPenalties:
- 設定変更固有の主要不利要素は多語再探索後もNONE_CONFIRMED_AFTER_RESEARCH。
resetDetection:
- 設定変更・電源OFF→ONの双方で液晶ゲーム数は0G表示となるため、表示0Gだけでは判別不可。
- 600G+αを超えた場合は設定変更否定方向の事後推測材料になるが、短期挙動での確定判別とはしない。
- 本機固有ガックン条件/発生率、即時固定ランプ、開始ステージ三者比較は再探索後もUNVERIFIED_AFTER_RESEARCH。
numericResetData:
- 通常天井: 900G+α。
- 設定変更後天井: 600G+α。
- 短縮幅: 300G。
- 規定ゲーム数では50G/150G/450G/750GがCZ高確チャンス、300G/600Gが大チャンスとする解析あり。ただしこれは設定変更専用値ではなく通常ゲーム性として分離保持。
- イチカツは設定変更0Gから期待値プラスとする独自計算を掲載するが、メーカー公表値ではないため性能コアへ混入しない。

## QA notes
- 型式L見える子ちゃんSCは情報島+検定記事、G-net、遊技日本、6確系で一致。
- 製造元はピーセカンド、販売/ブランドはパイオニアとして分離。
- 設定別BIG合算/RB/合算/出玉率はG-net、情報島+、6確系などで一致。
- ベースは6確系・ちょんぼりすた等の約30.8G/50枚に対し、必勝本の小役解析ページは約30.0Gとするため平均せず表記差を保持。
- resetBehaviorはスロベース、イチカツ、ジャグラーズネット、すろぱちくえすと等を横断。設定変更時600G+α短縮は複数一致。
- 有利区間リセット後の祈願チャレンジ恩恵は設定変更時を除外する資料があるため、朝一設定変更恩恵として誤収録しない。
- 完全再現用のCZ内部抽選・全状態移行・上位ボーナス詳細抽選はスコープ外。

## sources
- 情報島+ 検定: https://p-johojima.jp/new_machine/post-32349/
- 情報島+ 新機種: https://p-johojima.jp/new_machine/post-32821/
- G-net: https://g-net-ps.com/info/s0289/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-77392/
- 6確: https://www.kaku6.jp/slot/mierukochan/
- 必勝本 ボーナス: https://hisshobon.com/machineinfo/142649/
- 必勝本 コイン持ち: https://hisshobon.com/machineinfo/147074/
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/261153/
- スロベース: https://slobase.jp/machines/mieruko-chan
- スロベース reset: https://slobase.jp/articles/mieruko-chan-reset
- イチカツ: https://ichikatsu.com/mierukochan/
- ジャグラーズネット: https://jugglersnet.com/chumoku/mierukochan
- すろぱちくえすと: https://www.slopachi-quest.com/article/mierukochan-tenjou/
- なな徹: https://nana-press.com/kaiseki/machine/1192/

confidence:
- core: ANALYSIS_HIGH_MULTI_SOURCE
- formalModel: INDUSTRY_MULTI_SOURCE
- payout: INDUSTRY_ANALYSIS_MULTI_SOURCE
- base: CONFLICT_MINOR_DEFINITION_OR_ROUNDING
- resetCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- powerCycle: ANALYSIS_HIGH_MULTI_SOURCE_MACHINE_SPECIFIC_COMPARISON
- advantageousSection: ANALYSIS_HIGH_MULTI_SOURCE
- carryOverStandalone: SECONDARY_SUPPORTED_NOT_DIRECTLY_FIXED
- resetDetectionImmediate: UNVERIFIED

missingFields:
- 据え置き単独の高優先三者比較表
- 設定変更時の内部状態具体振り分け
- 設定変更時の内部ゲーム数加算有無・加算値の確定解析
- 本機固有ガックン条件/発生率、即時固定ランプ判別
- 設定変更/据え置き/純電断の開始ステージ三者確定情報

conflicts:
- baseGamesPer50: 約30.8G/50枚（複数解析） vs 約30.0G/50枚（必勝本解析）。平均せず併記。
