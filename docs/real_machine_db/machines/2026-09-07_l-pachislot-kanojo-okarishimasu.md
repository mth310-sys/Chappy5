# No.1819 Lパチスロ 彼女、お借りします

status: COMPLETE_CORE_WITH_RESET_RESEARCH
retrievedAt: 2026-09-15

machineName: Lパチスロ 彼女、お借りします
manufacturer: ビスティ製造 / SANKYO販売・ブランド
formalModel: Lレンタル彼女bK
releaseDate: 2026-09-07
generation: 6.5号機 / スマスロ
systemType: AT（疑似ボーナス＋1G連抽選型）
payoutRateBySetting: 設定1 97.7% / 2 98.7% / 3 101.0% / 4 105.5% / 5 110.4% / 6 114.9%
initialHitBySetting:
- CZ: 1/172 / 1/169 / 1/164 / 1/154 / 1/151 / 1/149
- ボーナス初当り: 1/269 / 1/263 / 1/254 / 1/235 / 1/231 / 1/226
baseGamesPer50: 約31.0G/50枚（設定1）
netIncrease: 約5.0枚/G
basicPayout:
- かのかりボーナス: 約150枚
- REGULAR BONUS: 約70枚
- ななかりDREAM: 約550枚
- 1GレンCHANCE: 1セット2G、成功期待度約40%
- ユメカノモード: ボーナス後66G以内の引き戻しゾーン、期待度約58%

## resetBehavior v0.7
resetQaStatus: COMPLETE_WITH_PARTIAL_UNVERIFIED_FIELDS
settingChangeBehavior:
- 必勝本の機種固有比較で、天井までのゲーム数RESET、モード再抽選、ポイント再抽選を確認。
- 設定変更後のゲーム数天井は通常最大1000G（REG後最大800G）から最大600Gへ短縮。
- ハートメーター表示はシャッター状態から開始。
carryOverBehavior:
- 据え置きは設定変更を伴わない純電源OFF→ONの機種固有比較から、天井G数・モード・ポイント・内部ハートメーターを引き継ぐ方向を支持。
- 据え置き単独の高優先三者比較表は今回固定できず、CARRY_OVER_SUPPORTED_BY_POWER_CYCLE_DIRECT_EVIDENCEとして保持。
powerCycleBehavior:
- 電源OFF→ONのみ: 天井までのゲーム数・モード・ポイントを引継ぎ。
- ハートメーターは見た目シャッター状態だが内部的には引継ぎ。
gameCounterReset:
- 設定変更: RESET。
- 据え置き: CARRY_OVER_SUPPORTED。
- 純電断: CARRY_OVER。
- 通常遊技中のゲーム数カウントはボーナス当選でリセットし、CZ失敗では保持。
ceilingAfterReset:
- 通常/かのかりボーナス後: 最大1000G（資料により+α表記）。
- REGULAR BONUS後: 最大800G（資料により+α表記）。
- 設定変更後: 最大600G（資料により+α表記）。
- 天井到達時はBIG系（かのかりボーナス、資料によってはななかりDREAM含む）当選。
modeAfterReset:
- 設定変更: モード再抽選。
- 純電断: モード引継ぎ。
- 通常時CZモードA/B/Cは公開されているが、設定変更時専用の具体振り分け率は再探索後もUNVERIFIED_AFTER_RESEARCH。
stateAfterReset:
- ポイントは設定変更で再抽選、純電断で引継ぎ。
- ハートメーターは設定変更時シャッター状態、純電断も表示はシャッターだが内部値引継ぎ。
- 独立した内部状態テーブルの設定変更時具体振り分けはUNVERIFIED_AFTER_RESEARCH。
advantageousSectionReset:
- 設定変更時RESET / 電源OFF→ON時CARRY_OVERとする機種固有解析あり。
- 必勝本直接比較表では有利区間の独立欄は確認できなかったため、ANALYSIS_HIGHとして保持。
resetBenefits:
- 最大天井1000G（REG後800G）→設定変更後600Gへ短縮。
- イチカツ解析では朝一0Gからの設定変更台を出玉率104.5%と評価。メーカー公表値ではないため通常機械割とは定義分離。
resetPenalties:
- 設定変更固有の主要不利要素は多語再探索後も確認できず。NONE_CONFIRMED_AFTER_RESEARCH。
resetDetection:
- 必勝本では設定変更/電源OFF ONとも開始ステージは現在調査中。
- スロベースでは現時点で有効な即時リセット判別方法は未判明。
- 600G天井到達は事後的な設定変更推測材料だが、到達前の自力当選では判別不能。
- ハートメーターは純電断でも見た目シャッター状態になるため表示単独では判別材料にしない。
- 本機固有ガックン条件/発生率、固定ランプ等は機種名/型式/メーカー＋設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索したが未固定。UNVERIFIED_AFTER_RESEARCH。
numericResetData:
- 通常/かのかりボーナス後天井: 最大1000G（+α表記資料あり）
- REGULAR BONUS後天井: 最大800G（+α表記資料あり）
- 設定変更後天井: 最大600G（+α表記資料あり）
- 朝一リセット台の解析出玉率: 104.5%（イチカツ、非メーカー公表値）

## QA notes
- 情報島＋の検定記事でビスティ製 `Lレンタル彼女bk` を確認。P-WORLD業界ニュースでもSANKYO発表・型式 `Lレンタル彼女bK`・ビスティ製を確認。
- 必勝本、6確、ちょんぼりすた、ぱっすろたいむ、pacnk等で全設定性能値が一致し、重大な性能CONFLICTなし。
- 必勝本の設定変更/電源OFF ON直接比較をresetBehaviorの主根拠とした。
- 天井数値は必勝本が1000/800/600G、1geki・6確等が1000/800/600G+α。発動前兆等の表記差の可能性があるため値自体は同一方向として保持し、+α表記差をnotesに残す。
- 朝一104.5%は第三者解析評価であり、設定4機械割105.5%等とは意味が異なる。

## sources
- 情報島＋ / 検定通過（ビスティ、型式）: https://p-johojima.jp/new_machine/post-32947/
- P-WORLD業界ニュース / 遊技通信（SANKYO発表、型式、製造元、ゲーム性）: https://news.p-world.co.jp/articles/34055/yugitsushin
- 必勝本 基本スペック（全設定CZ/初当り/機械割、獲得性能）: https://hisshobon.com/machineinfo/138896/
- 必勝本 天井&設定変更（設定変更/電源OFF ON直接比較、天井、モード、ポイント、ハートメーター）: https://hisshobon.com/machineinfo/143048/
- 必勝本 狙いドコロ（状況別天井）: https://hisshobon.com/machineinfo/143129/
- 1geki（通常/REG後/設定変更後天井）: https://1geki.jp/slot/l_kanokari/3/
- 1geki 規定ゲーム数（通常ゲーム数カウントのリセット条件）: https://1geki.jp/slot/l_kanokari/43/
- 6確（型式、導入日、純増、ベース、全設定性能、天井）: https://www.kaku6.jp/slot/kanokari/
- ちょんぼりすた（型式、導入日、純増、ベース）: https://chonborista.com/slot/sankyo-slot/263079/
- イチカツ（天井、朝一リセット解析出玉率104.5%）: https://ichikatsu.com/kanokari/
- スロベース reset（設定変更/電断、有利区間・内部状態、判別）: https://slobase.jp/articles/kanokari-reset
- SANKYO開発こぼれ話 お知らせ（導入後の公式解析更新確認）: https://www.secret-story.sankyo-fever.jp/information

confidence:
- core: INDUSTRY + ANALYSIS_HIGH
- formalModel: INDUSTRY
- resetCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- powerCycle: ANALYSIS_HIGH_DIRECT_COMPARISON
- modePointCarry: ANALYSIS_HIGH_DIRECT_COMPARISON
- advantageousSection: ANALYSIS_HIGH
- resetPayout104_5: ANALYSIS_SINGLE_NON_OFFICIAL
- resetModeNumeric: UNVERIFIED
- resetDetectionImmediate: UNVERIFIED

missingFields:
- 設定変更時CZモードA/B/Cの具体振り分け
- 設定変更時の独立内部状態具体振り分け
- 本機固有ガックン条件/発生率、即時固定ランプ判別
- 設定変更/純電断の開始ステージ確定情報

conflicts:
- 重大な性能数値CONFLICTなし。
- 天井は必勝本の1000/800/600G表記と、1geki・6確等の1000/800/600G+α表記がある。数値本体は一致し、発動タイミング表記差として保持。
- 天井恩恵は必勝本がBIG当選、1geki等が「かのかりボーナス or ななかりDREAM」とする表現差があるため、厳密な内訳はSOURCE_WORDING_DIFFERENCEとして保持。
