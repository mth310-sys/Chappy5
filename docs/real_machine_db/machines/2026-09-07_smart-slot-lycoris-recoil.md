# No.1818 スマスロ リコリス・リコイル

status: COMPLETE_CORE_WITH_RESET_RESEARCH
retrievedAt: 2026-09-15

machineName: スマスロ リコリス・リコイル
manufacturer: 銀座製造 / サミー販売・ブランド
formalModel: Lスマスロ リコリス・リコイルKX
releaseDate: 2026-09-07
generation: 6.5号機 / スマスロ
systemType: AT（疑似ボーナス連打型）
payoutRateBySetting: 設定1 97.9% / 2 98.9% / 3 101.3% / 4 106.1% / 5 110.4% / 6 114.6%
initialHitBySetting:
- CZ: 1/198.7 / 1/196.9 / 1/191.3 / 1/183.3 / 1/175.9 / 1/169.4
- AT リコリスラッシュ: 1/328.8 / 1/323.4 / 1/312.1 / 1/288.3 / 1/271.6 / 1/256.7
baseGamesPer50: 約31.8G/50枚
netIncrease: ボーナス中 約8.4枚/G
basicPayout:
- AT突入時プロローグ: 100枚
- リコリスラッシュ20: 20G+α、ボーナス当選期待度約60%
- リコリスラッシュ50: 前半50G+α＋後半ST10G+α
- TY: 約550枚（販売資料値。物差し必須外の補助値）

## resetBehavior v0.7
resetQaStatus: COMPLETE_WITH_PARTIAL_UNVERIFIED_FIELDS
settingChangeBehavior:
- 設定変更で有利区間・天井・内部状態をRESETとする複数機種固有解析を確認。
- AT間天井は通常最大850G+αから最大600Gへ短縮。
- CZ間天井は通常最大600G+αから最大250Gへ短縮。
- 液晶表示は0Gだが、内部通常ゲーム数をランダム加算して開始する解析が複数一致。
carryOverBehavior:
- 据え置きは天井/内部状態を引き継ぐ方向を、純電断比較および朝一解析から支持。
- 据え置き単独の高優先三者比較表は今回固定できず、CARRY_OVER_SUPPORTED_BY_POWER_CYCLE_DIRECT_EVIDENCEとして保持。
powerCycleBehavior:
- 電源OFF→ONのみでは有利区間・AT間天井・CZ間天井・内部状態を引き継ぐとする機種固有比較を確認。
- 液晶ゲーム数は0G表示になるが内部カウントは引継ぎとする解析あり。
gameCounterReset:
- 設定変更: RESET後、内部ゲーム数をランダム加算。
- 据え置き: CARRY_OVER_SUPPORTED。
- 純電断: CARRY_OVER。
ceilingAfterReset:
- 通常AT間: 最大850G+α。850G到達時はAT当選＋Vストック抽選。
- 通常CZ間: 最大600G+α。到達でCZ。
- 設定変更後AT間: 最大600G。
- 設定変更後CZ間: 最大250G。
- AT間天井候補は250/400/600/750/850G。750G以下および短縮天井では前兆経由の成功濃厚CZとする解析が一致。
modeAfterReset:
- 設定変更専用の名称付きモード振り分け率は多語再探索後も固定できず。UNVERIFIED_AFTER_RESEARCH。
- 内部ゲーム数ランダム加算と天井短縮は確認。
stateAfterReset:
- 設定変更: RESET。
- 純電断: CARRY_OVER。
- 具体的な設定変更時状態振り分け率はUNVERIFIED_AFTER_RESEARCH。
advantageousSectionReset:
- 設定変更: RESETとする複数機種固有解析を採用。
- 電源OFF→ON: CARRY_OVERとする機種固有比較を確認。
- 据え置き: CARRY_OVER_SUPPORTED。
resetBenefits:
- AT間850G→最大600G、CZ間600G→最大250Gの二重短縮。
- 内部通常ゲーム数のランダム加算。
- 複数解析で設定1でもリセット時出玉率100%超とされる。ただしメーカー公表の設定変更時機械割ではないためANALYSIS扱い。
resetPenalties:
- 公開資料で設定変更固有の主要不利要素は確認できず。NONE_CONFIRMED_AFTER_RESEARCH。
resetDetection:
- 液晶G数は設定変更でも電源OFF→ONでも0G表示とされ、表示G数単独では判別不可。
- 最大250GのCZ間短縮や最大600GのAT間短縮は事後的なリセット推測材料。ただしAT駆け抜け等でも同短縮が発生するため履歴条件を確認せず設定変更確定には使えない。
- 本機固有ガックン条件/発生率、固定ランプ等の即時判別は型式/メーカー/シリーズ名＋設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン等で再探索したが未固定。UNVERIFIED_AFTER_RESEARCH。
numericResetData:
- 通常AT間天井: 最大850G+α
- 設定変更後AT間天井: 最大600G
- 通常CZ間天井: 最大600G+α
- 設定変更後CZ間天井: 最大250G
- 設定変更時: 内部通常G数ランダム加算（具体振り分け未確認）
- リセット時設定1出玉率: 100%超との解析複数（メーカー公式値ではない）

## QA notes
- サミー発表を報じた情報島＋で銀座製、2026-09-07導入、設定1/6のCZ・AT・出玉率、ベースを確認。
- G-net販売資料で型式 `Lスマスロ リコリス・リコイルKX`、開店日2026-09-07、純増約8.4枚/G、ベース31.8G、全設定CZ/AT/出玉率、通常850G+α/変更600G+αを照合。
- P-WORLD、6確、ジャグラーズネットでも全設定性能値が一致し、重大な性能CONFLICTなし。
- リセットはイチカツ、スロベース等の導入後機種固有解析を横断。AT/CZ二系統天井短縮、内部G加算、純電断引継ぎが一致。
- 一般仕様だけを根拠にした記述はcanonical根拠から除外し、機種固有解析一致を優先した。

## sources
- 情報島＋ / サミー発表（製造元、導入日、基本スペック）: https://p-johojima.jp/new_machine/post-32965/
- G-net（型式、導入日、全設定スペック、ベース、純増、救済機能）: https://g-net-ps.com/info/s0290/
- P-WORLD（全設定CZ/AT/出玉率、ベース）: https://www.p-world.co.jp/machine/database/10503
- 6確（製造元、基本スペック、AT性能）: https://www.kaku6.jp/slot/lycoreco/
- ジャグラーズネット（全設定CZ/AT/出玉率、天井振り分け、短縮）: https://jugglersnet.com/chumoku/rikoriko
- イチカツ（AT/CZ天井、設定変更/電断比較、内部G加算、朝一恩恵）: https://ichikatsu.com/lycorisrecoil/
- スロベース reset（天井二系統短縮、内部G加算、液晶表示判別、設定1リセット100%超解析）: https://slobase.jp/articles/lycoris-recoil-reset
- スロベース machine（設定変更/電断比較、天井、基本スペック）: https://slobase.jp/machines/lycoris-recoil

confidence:
- core: INDUSTRY + ANALYSIS_HIGH
- formalModel: INDUSTRY
- resetCeiling: ANALYSIS_HIGH + INDUSTRY_PARTIAL
- powerCycle: ANALYSIS_HIGH
- advantageousSection: ANALYSIS_HIGH
- internalGameAdd: ANALYSIS_HIGH
- resetSetting1PayoutOver100: ANALYSIS_HIGH_NON_OFFICIAL
- modeNumeric: UNVERIFIED
- resetDetectionImmediate: UNVERIFIED

missingFields:
- 設定変更時の名称付きモード振り分け/具体率
- 設定変更時内部状態の具体振り分け率
- 内部ゲーム数ランダム加算の具体振り分け
- 本機固有ガックン条件/発生率、即時固定ランプ判別

conflicts:
- 重大な性能数値CONFLICTなし。
- リセット時設定1出玉率100%超は解析評価でありメーカー公表の機械割とは定義が異なるため、通常機械割97.9%とCONFLICT扱いしない。
