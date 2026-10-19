# LBトリプルクラウン

recordNo: 1742
machineName: LBトリプルクラウン
aliases: トリプルクラウン / LB TCSF4 / LBTCSF4
manufacturer: 岡崎産業
formalModel: LBTCSF4
inspectionCode: 4S1919
releaseDate: 2025-07-07
generation: 6号機 / スマスロ / ボーナストリガー（BT）
systemType: ノーマル / リアルボーナス + BT / 完全告知
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 遊技通信/P-WORLD業界記事で型式 `LB TCSF4`、岡崎産業製、2025年7月導入予定を確認。
- グリーンべると/P-WORLD業界記事で2025年7月の本土向け展開と性能を確認。
- HAZUSEで検定番号 `4S1919`、型式 `LBTCSF4`、導入開始日2025-07-07を確認。
- 後継 `LBトリプルクラウンセブン` は2026-04-06導入の別型式 `LBTCSFG` であり、本レコードと分離。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 99.4%
- setting5: 104.5%
- setting6: 111.1%
initialHitBySetting:
  big:
  - setting1: 1/276.5
  - setting2: 1/273.1
  - setting5: 1/251.1
  - setting6: 1/227.6
  reg:
  - setting1: 1/414.8
  - setting2: 1/392.4
  - setting5: 1/346.8
  - setting6: 1/302.0
  combined:
  - setting1: 1/165.9
  - setting2: 1/161.0
  - setting5: 1/145.6
  - setting6: 1/129.8
baseGamesPer50: 約35G
netIncrease: NOT_APPLICABLE_REAL_BONUS_BT
basicPayout:
- BB: 平均約312枚（初回BB195枚 + BT平均値）
- BB in BB: 平均約507枚（初回BB含む獲得期待値）
- RB: 平均/最大表記で約104枚
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- ボーナスのみで出玉を増やすリアルボーナス+BT機。
- 通常時は主にリプレイでボーナスを抽選し、疑似リプレイ連続で期待度が上昇。疑似3連はBB濃厚とする解析あり。
- BB前半195枚獲得後に特別状態（BT）へ移行し、BT中にBBを引けばBB in BB。
- 天井は非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_NON_APPLICABLE_AND_UNVERIFIED_FIELDS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井非搭載のリアルボーナス+BTノーマル機で、設定変更による天井短縮・朝一専用モード・CZ優遇は確認できない。
- 必勝本の機種別比較では設定変更時のリールガックンは `現在調査中`。
- 設定変更時にBT/ボーナス等の特殊途中状態がどう処理されるかを直接示した高優先資料は、型式名・メーカー・BT・朝一・設定変更で再探索しても固定できなかった。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_AFTER_RESEARCH_FOR_SPECIAL_STATE_CONTRACT

### carryOverBehavior
- 通常遊技中に天井ゲーム数・AT/CZモード・周期・ポイント等の進行要素は存在しないため、それらの据え置き引継ぎはNOT_APPLICABLE。
- BT/成立済みボーナス等の特殊途中状態を跨ぐ据え置き契約は公開資料で固定できず、一般論から補完しない。
confidence: NOT_APPLICABLE_FOR_NORMAL_PROGRESS / UNVERIFIED_AFTER_RESEARCH_FOR_SPECIAL_STATE

### powerCycleBehavior
- 必勝本の機種別比較では純電源OFF→ON時のリールガックンも `現在調査中`。
- 純電断時のBT/ボーナス特殊途中状態の復帰仕様を直接明記した高優先資料は固定できなかった。
- 後発二次解析には設定変更・電断復帰後の最初のBB/RB楽曲を初回扱いとする記載があるが、機械状態の完全復帰契約とは別物として補助情報に限定する。
confidence: UNVERIFIED_AFTER_RESEARCH / ANALYSIS_SINGLE_FOR_FIRST_MUSIC_TREATMENT

### gameCounterReset
- 天井非搭載のため、天井用ゲーム数のRESET/CARRY_OVERはNOT_APPLICABLE。
confidence: ANALYSIS_HIGH / NOT_APPLICABLE

### ceilingAfterReset
normalCeiling: NOT_APPLICABLE
resetCeiling: NOT_APPLICABLE
ceilingShortening: NOT_APPLICABLE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- AT/CZ型の通常モード・朝一専用モードは確認できない。
- 設定変更時専用の初当たり優遇モード等も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### stateAfterReset
- 通常時の高確/低確で初当たりを管理するAT型内部状態は確認できないためNOT_APPLICABLE。
- BT/ボーナス等の特殊途中状態の設定変更・据え置き・電断復帰はUNVERIFIED_AFTER_RESEARCH。
confidence: NOT_APPLICABLE_FOR_NORMAL_AT_STATE / UNVERIFIED_AFTER_RESEARCH_FOR_SPECIAL_STATE

### advantageousSectionReset
- 本機固有の設定変更/据え置き/純電断ごとの有利区間内部契約を直接記載した高優先資料は固定できなかった。
- スマスロ一般仕様から推測せず `UNVERIFIED_AFTER_RESEARCH`。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 天井短縮、朝一専用モード、CZ優遇、初当たり優遇等の公開リセット恩恵は確認できない。
- `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetPenalties
- 前日天井/モード進行消失のような主要不利要素は構造上NOT_APPLICABLE。
- 設定変更専用の冷遇数値も確認できない。
confidence: NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 設定変更時・電源OFF→ON時ともリールガックンは必勝本で `現在調査中`。
- 天井非搭載のためゲーム数超過による据え置き判別はNOT_APPLICABLE。
- 後発二次解析では朝一のBB/RB楽曲が初回扱いとされるが、設定変更と純電断の双方で同様とされるため設定変更単独の判別には利用できない。
confidence: ANALYSIS_HIGH_FOR_GAKKUN_UNDER_RESEARCH / ANALYSIS_SINGLE_FOR_MUSIC_LIMITATION

### numericResetData
normalCeiling: NOT_APPLICABLE
resetCeiling: NOT_APPLICABLE
resetModeDistribution: NOT_APPLICABLE_OR_NOT_CONFIRMED
resetBenefitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetGakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 2026年後継機 `LBトリプルクラウンセブン` のスペック（BB 1/258.0等、機械割97.5〜112.1%）が検索結果へ混在する。2025年 `LBトリプルクラウン / LBTCSF4` のcanonicalは、業界記事・必勝本・複数解析が一致する `BB 1/276.5〜1/227.6 / RB 1/414.8〜1/302.0 / 機械割97.9〜111.1%` とし、後継スペックを混入させない。
- RB獲得は資料に「平均約104枚」「104枚」「最大104枚」の表現差がある。比較用canonicalは約104枚とし、定義語の差を保持する。

## missingFields
- 設定変更/据え置き/純電断時のBT・ボーナス特殊途中状態復帰契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有有利区間の設定変更/据え置き/純電断契約: UNVERIFIED_AFTER_RESEARCH
- リールガックン発生条件・発生率: CURRENTLY_UNDER_RESEARCH / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 朝一専用の公開数値恩恵: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/31154/yugitsushin
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/31119/greenbelt
- パチビー 発表会記事: https://www.pachibee.jp/pparticles/view/1329
- HAZUSE: https://hazuse.com/hd/4s1919/
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4545/1/110082
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/87455/
- ちょんぼりすた: https://chonborista.com/slot/okazaki-slot/239184/
- 1geki BT解説: https://1geki.jp/slot/lb_triplecrown/61/
- 6確: https://www.kaku6.jp/slot/triplecrown/
- 情報島 機種情報: https://p-johojima.jp/machine_spec/post-9189/
- 岡崎産業 2026年後継機プレスリリース（別型式確認用）: https://prtimes.jp/main/html/rd/p/000000006.000178173.html
