# がんばれ元気 激闘編

machineName: がんばれ元気 激闘編
manufacturer: ヤーマ
modelName: ガンバレゲンキ3
releaseDate: 2008-03-24
releaseDateConfidence: ANALYSIS_HIGH
releaseDateNote: P-WORLDの2008-03-24 02:58投稿に「今日から」とあるため3/24を実導入開始の最有力日として採用。メーカー現公式は2008年3月登場、P-WORLD本体も導入開始2008年03月までを確認。一次資料で具体日を直接確認できていないため日付信頼度は月精度より一段低く扱う。
generation: 5号機初期
systemType: ボーナス + ART（チャンピオンロード）
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## 性能コア

payoutRateBySetting:
- 設定1: 98.0%
- 設定2: 100.2%（5号機まとめwiki） / 100.0%（5号機クロニクル）
- 設定3: 102.2%（5号機まとめwiki） / 102.0%（5号機クロニクル）
- 設定4: 104.5%
- 設定5: 107.0%
- 設定6: 110.0%
- status: CONFLICT_MINOR
- note: 設定2・3のみ0.2pt差。平均化せず両値を保持。

initialHitBySetting:
- ボーナス合成: 全設定 1/199.8 前後（解析資料では設定別赤7/緑7/ガリ比率に差があるが、総合は約1/200）
- 赤7: 1/3276.8 / 1/2730.7 / 1/2340.6 / 1/2048.0 / 1/1820.4 / 1/1638.4
- 緑7: 1/442.8 / 1/420.1 / 1/431.2 / 1/455.1 / 1/468.1 / 1/481.9
- ガリ系ボーナス: 1/409.6 / 1/409.6 / 1/442.8 / 1/409.6 / 1/409.6 / 1/409.6（5号機まとめwiki掲載値。行表示の欠落があるため設定別細目は補助値扱い）

baseGamesPer50:
- 設定1: 32.13G
- 設定2: 32.31G
- 設定3: 32.48G
- 設定4: 32.68G
- 設定5: 32.86G
- 設定6: 33.04G
- sourceDefinition: パチマガスロマガ「1000円あたりのゲーム数」

netIncrease:
- ART「チャンピオンロード」: 約+1.5〜1.6枚/G
- redART: 77G
- goldART: 最大5000G / 実質次回ボーナスまで
- ART loop: 約75%

basicPayout:
- BIG: 純増約312枚
- MID/MB: 純増約102枚
- REG/ガリ: 純増約54枚

modeSpecificMinimumData:
- ボーナス後はCZ「チャレンジファイト」へ。
- BIG後のART突入率は全設定共通100%と解析資料に記載。
- ART終了後は再びCZへ入り、約75%でARTループ期待。
- 前回チャレンジファイト転落から666G消化で周期チャレンジファイトへ移行することを当時系5号機まとめwikiで確認。

## resetBehavior (mission v0.7)

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
gameCounterReset: UNVERIFIED_AFTER_RESEARCH
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH
modeAfterReset: UNVERIFIED_AFTER_RESEARCH
stateAfterReset: UNVERIFIED_AFTER_RESEARCH
advantageousSectionReset: NOT_APPLICABLE
resetBenefits: NONE_CONFIRMED
resetPenalties: NONE_CONFIRMED
resetDetection: UNVERIFIED_AFTER_RESEARCH
numericResetData: NONE_CONFIRMED

### resetBehavior 調査メモ

- 通常時には「前回チャレンジファイト転落から666G」で周期CZへ入るゲーム数依存挙動が存在する。
- ただし設定変更時にこの666Gカウンタがクリアされるか、据え置きで引き継ぐか、電源OFF→ONだけの場合にどうなるかは、本機固有の直接根拠を確認できなかった。
- `がんばれ元気激闘編 / がんばれ元気3 / ガンバレゲンキ3 / ヤーマ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 666G / チャレンジファイト / ガックン` を組み替え、現存解析、旧5号機wiki、P-WORLD、当時攻略アーカイブを横断したが確定資料なし。
- 前作「がんばれ元気」の950G天井情報は別スペックのため流用禁止。
- 有利区間制度前の5号機のため advantageousSectionReset は NOT_APPLICABLE。

## conflicts

- CONFLICT_MINOR_PAYOUT_RATE: 設定2・3の機械割が、旧5号機wiki `100.2/102.2%` と5号機クロニクル `100.0/102.0%` で差。平均化しない。
- releaseDate: メーカー公式/P-WORLDは2008年3月まで。P-WORLD当時掲示板の「今日からですね！」（2008-03-24 02:58）を具体日の補助根拠とするため、一次資料の納品日が見つかれば将来更新する。

## missingFields

- 設定変更時の666G周期カウンタ処理
- 据え置き時の周期カウンタ/CZ/ART状態引継ぎ
- 電源OFF→ONのみの周期カウンタ/CZ/ART状態処理
- 朝一専用状態・リセット恩恵/不利の公開数値
- ガックン/初期出目等による変更判別

## sources

取得日: 2026-09-01

1. ベルコ現公式「がんばれ元気 激闘編」（旧ヤーマ機） — 2008年3月登場、5号機ART機
   https://www.s-bellco.co.jp/products/slot/yama_genki_gekitou/
   confidence: OFFICIAL
2. P-WORLD「がんばれ元気激闘編」 — 型式ガンバレゲンキ3、検定番号7S0783、BIG約312枚/MB約102枚/RB約54枚、当時掲示板で2008-03-24導入開始を示唆
   https://www.p-world.co.jp/machine/database/5116
   confidence: ANALYSIS_HIGH
3. パチマガスロマガ「がんばれ元気3～激闘編～ 小役確率・通常時」 — 1000円あたり32.13〜33.04G
   https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/09/c.php
   confidence: ANALYSIS_HIGH
4. パチスロ5号機まとめwiki「がんばれ元気 激闘編」 — 設定別ボーナス/機械割、666G周期CZ、ART構造
   https://w.atwiki.jp/5gouki/pages/137.html
   confidence: ANALYSIS_SINGLE
5. K-Navi「チャンピオンロード(ART)」 — ART約1.6枚/G、77G/最大5000G、BIG後100%、約75%ループ
   https://p-kn.com/slot/775/5119/
   confidence: ANALYSIS_HIGH
6. 5号機クロニクル「ヤーマ」 — 2008/3、機械割98.0〜110.0%
   https://5goki.com/yama
   confidence: ANALYSIS_SINGLE
7. マイクロオーダーサービス当時攻略アーカイブ — ジアマゾンロード/がんばれ元気激闘編等の当時攻略公開記録
   https://plaza.rakuten.co.jp/mosnet/diaryall/
   confidence: ARCHIVE_SUPPORT

## quality

performanceCoreConfidence: ANALYSIS_HIGH
resetBehaviorConfidence: UNVERIFIED
recordStatus: COMPLETE_CORE / RESET_PARTIAL
