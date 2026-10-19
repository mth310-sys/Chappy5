# No.1816 LBトリプルクラウンX-300

status: COMPLETE_CORE_WITH_RESET_RESEARCH
retrievedAt: 2026-09-15

machineName: LBトリプルクラウンX-300
manufacturer: 清龍ゲームジャパン
formalModel: LBトリプルクラウンX-300
inspectionNumber: 531140
releaseDate: 2026-08-03
generation: 6.5号機 / スマスロ
systemType: ノーマル / ボーナストリガー(BT)
payoutRateBySetting: 設定1 97.0% / 2 99.0% / 3 101.0% / 4 104.0% / 5 107.0% / 6 110.0%
initialHitBySetting:
- BB: 1/303.41 / 1/289.98 / 1/276.52 / 1/262.14 / 1/249.19 / 1/238.31
- RB: 1/481.88 / 1/448.88 / 1/422.81 / 1/387.89 / 1/356.17 / 1/329.33
- ボーナス合成: 1/186.18 / 1/176.17 / 1/167.18 / 1/156.41 / 1/146.61 / 1/138.26
baseGamesPer50: 約38G以上/50枚（設定1、HAZUSE）
netIncrease: N/A（リアルボーナス主体のBTノーマル。AT純増として扱わない）
basicPayout:
- BIG BONUS: 最大約304枚（BT含む）
- REGULAR BONUS: 最大約107枚
- BIGは前半パート→BT→後半パートで構成。

## resetBehavior v0.7
resetQaStatus: COMPLETE_APPLICABILITY_WITH_PARTIAL_UNVERIFIED_FIELDS
settingChangeBehavior:
- 本機はリアルボーナス主体のBTノーマルで、公開解析上ゲーム数天井・朝一専用モード・AT/CZリセット優遇は確認されない。
- コンプリート機能による打ち止め状態は設定変更で解除される。
- リアルボーナス成立フラグ/BT権利が設定変更時にどう扱われるかを本機固有資料で直接比較した公開記述は、多語再探索後も未固定。UNVERIFIED_AFTER_RESEARCH。
carryOverBehavior:
- 天井/通常モード/AT状態の持越し対象はN/A。
- 据え置き時のリアルボーナス成立フラグ/BT権利の本機固有直接契約は十分な再探索後も未固定。UNVERIFIED_AFTER_RESEARCH。
powerCycleBehavior:
- 設定変更なしの電源OFF→ONについて、リアルボーナス成立フラグ/BT権利を含む本機固有の直接比較資料は未固定。UNVERIFIED_AFTER_RESEARCH。
gameCounterReset:
- ゲーム数天井非搭載のため、天井ゲーム数リセット/引継ぎはN/A。
ceilingAfterReset:
- 天井非搭載。設定変更後の短縮天井なし。
modeAfterReset:
- AT機型の通常/天国等の朝一専用モードは確認されず、天井・ゾーン狙いの対象外。
stateAfterReset:
- AT/CZの低確/高確等の内部状態はN/A。
- リアルボーナス/BT固有状態の三者比較はUNVERIFIED_AFTER_RESEARCH。
advantageousSectionReset:
- 本機固有の設定変更/据え置き/純電断における有利区間の直接比較資料は多語再探索後も未固定。一般則から補完しない。UNVERIFIED_AFTER_RESEARCH。
resetBenefits:
- 公開された朝一/設定変更固有の出玉優遇、天井短縮、モード優遇、初当り優遇数値は確認できず。
resetPenalties:
- 公開された設定変更固有の不利要素は確認できず。
resetDetection:
- 天井/ゾーン挙動による変更判別はN/A。
- 本機固有の設定変更ガックン条件・発生率、据え置きとの判別契約は、機種名/型式/メーカー/シリーズ名＋設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン等で再探索したが未確認。UNVERIFIED_AFTER_RESEARCH。
numericResetData:
- 天井: 非搭載
- 設定変更後短縮天井: N/A
- 朝一専用モード振り分け: N/A / 公開確認なし
- 朝一初当り優遇率: 公開確認なし

## QA notes
- HAZUSEで導入日2026-08-03、型式LBトリプルクラウンX-300、検定番号531140、清龍ゲームジャパン、全設定のBB/RB/合成/出玉率、設定1約38G以上/50枚、BB約304枚/RB約107枚を確認。
- 遊技日本で2026-03-23の検定通過とメーカー・型式を業界資料として照合。
- 遊技日本由来の新機種報道転載でも全設定BB/RB/合成/出玉率、BB約304枚/RB約107枚を照合。
- 2026-08-03導入はHAZUSE、イチカツ、しんのすけちゃんねる、P-WORLD掲載差分を整理した後年資料で支持。
- 情報島＋/一撃など全国導入カレンダーが本機を省く一方、P-WORLDでは8/7時点6店舗掲載との記録があり、沖縄向け地域性の強い導入機として独立収録する。全機種方針上、全国規模の大小で除外しない。
- resetBehaviorは「ノーマルだから一般則でこうなる」と推定せず、天井非搭載等の適用外項目と、直接資料がない三者比較を分離した。

## sources
- HAZUSE（型式、検定番号、導入日、メーカー、全設定BB/RB/合成、出玉率、ベース、獲得枚数、基本仕様、コンプリート機能）: https://hazuse.com/machine/pachislot/SX0139/
- 遊技日本（検定通過、メーカー、型式）: https://yugi-nippon.com/pachinko-new-machine/post-76177/
- ぱちんこドキュメント / 遊技日本新機種報道転載（全設定BB/RB/合成/出玉率、BB/RB獲得枚数、沖縄向けBT機）: https://pachinkolist.com/archives/63391424.html
- ラクパチ（BTノーマル、天井非搭載、朝一リセット優遇解析待ちの確認）: https://www.rakupachi.com/blog/triple-crown-x300-spec
- イチカツ（2026-08-03導入カレンダー照合）: https://ichikatsu.com/newslot2026/
- しんのすけちゃんねる（2026-08-03導入・製造販売照合）: https://shinnosuke-ch.com/2026%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%B0%8E%E5%85%A5%E6%A9%9F%E7%A8%AE%E4%B8%80%E8%A6%A7/
- 8/7時点P-WORLD差分整理（8/3、掲載6店舗、地域性）: https://note.com/yoshiki072/n/n3d34ad314443
- 情報島＋過去新台情報（全国カレンダー側の7機掲載。地域導入差の境界監査用）: https://p-johojima.jp/machine_spec/post-2074/
- 一撃2026年8月カレンダー（全国カレンダー側の7機掲載。地域導入差の境界監査用）: https://1geki.jp/newmachinecalender/202608/

confidence:
- core: ANALYSIS_HIGH + INDUSTRY
- formalModelInspection: ANALYSIS_HIGH + INDUSTRY
- releaseDate: ANALYSIS_HIGH_WITH_REGIONAL_DEPLOYMENT_NOTE
- resetCeilingApplicability: ANALYSIS_SINGLE_TO_HIGH
- resetThreeWayStateContract: UNVERIFIED
- advantageousSectionThreeWayContract: UNVERIFIED
- resetDetection: UNVERIFIED

missingFields:
- 設定変更/据え置き/純電断時のリアルボーナス成立フラグ・BT権利の本機固有直接契約
- 有利区間の三者直接比較
- 本機固有ガックン条件/発生率

conflicts: []
