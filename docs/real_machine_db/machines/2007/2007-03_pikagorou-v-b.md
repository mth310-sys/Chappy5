# ピカゴロウV-B

machineName: ピカゴロウV
manufacturer: 山佐
releaseDate: 2007-03-18（西日本先行） / 2007-03-25（その他地域予定）
generation: 5号機
systemType: ノーマルAタイプ・完全告知
formalModelName: ピカゴロウV-B

## payoutRateBySetting

- 設定1: 98.30%
- 設定2: 100.30%
- 設定3: 103.60%
- 設定4: 106.90%

confidence: ANALYSIS_SINGLE

note: 4段階設定。pacnk整理値を採用。今回確認した当時業界記事では設定別機械割そのものは掲載されていないため、別系統の数値照合は未完了。

## initialHitBySetting

BIG:
- 設定1: 1/291.30
- 設定2: 1/280.10
- 設定3: 1/266.40
- 設定4: 1/254.00

SMALL / REG:
- 設定1: 1/378.80
- 設定2: 1/360.10
- 設定3: 1/334.40
- 設定4: 1/312.10

全ボーナス合成（当時業界記事の丸め値）:
- 設定1: 約1/164
- 設定2: 約1/157
- 設定3: 約1/148
- 設定4: 約1/140

confidence: HIGH

note: BIG/SMALLの端数付き設定別値はpacnk、設定1〜4端点と合算は2007年当時のグリーンべると記事でも整合を確認。

## baseGamesPer50

- 1000円（50枚）あたり: 約35〜36G

confidence: INDUSTRY

## netIncrease

- NOT_APPLICABLE
- RT/ART等の付加機能なし。ボーナスのみで出玉を増やすノーマルタイプ。

confidence: HIGH

## basicPayout

- BIG BONUS: 360枚以上払い出しで終了 / 平均純増約335枚
- SMALL BONUS（REG相当）: 120枚以上払い出しで終了 / 平均純増約104〜105枚

confidence: HIGH

## modeSpecificMinimumData

- 5号機Aタイプ、完全告知。
- 設定は4段階。
- 天井機能なし。
- RTなどの付加機能なし。
- 全小役でボーナス同時抽選。物差し用途では詳細小役別期待度は保存対象外。
- 有利区間は制度導入前のため非該当。

confidence: HIGH

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-11

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH（本機固有の設定変更時内部処理を確定できる公開資料未発見）
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH（据え置き時の本機固有差分を確定できる公開資料未発見）
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH（電源OFF→ONのみでの本機固有挙動を確定できる公開資料未発見）
gameCounterReset: NOT_APPLICABLE_TO_CEILING（天井非搭載。通常の表示ゲーム数処理そのものはホール設備依存のためDB対象外）
ceilingAfterReset: NOT_APPLICABLE（天井機能なし）
modeAfterReset: NOT_APPLICABLE（通常時の天井モード・朝一専用モード等を確認できず、ノーマルAタイプとして該当機構なし）
stateAfterReset: UNVERIFIED_AFTER_RESEARCH（朝一客行動に影響する本機固有内部状態の公開契約を固定できず。ボーナス成立状態等の完全再現用内部処理は推測しない）
advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度導入前）
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH（朝一/設定変更固有の恩恵を示す資料未確認）
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH（朝一/設定変更固有の不利を示す資料未確認）
resetDetection: UNVERIFIED_AFTER_RESEARCH（ガックン、初期出目、ランプ状態など本機固有の変更判別を確定できる資料未発見）
numericResetData: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### resetBehavior research memo

取得日2026-09-11。既存の2026-08-31探索に加え、`ピカゴロウV / ピカゴロウV-B / 山佐 / 5号機 / 完全告知` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / ガックン / リールガックン / 天井 / 状態引継ぎ / 設定変更判別 / 初期出目` を再度組み替え、山佐公式、2007年当時グリーンべると/P-WORLD業界記事、K-Navi、P-WORLD機種DB、旧攻略系、後年整理資料まで再探索した。公式・業界資料から5号機Aタイプ、天井なし、完全告知、4段階設定、ボーナス性能は再確認できた。一方、設定変更・据え置き・純電断で差が出る本機固有内部状態、ガックン等の変更判別、公開朝一数値は直接資料を固定できなかった。一般的な5号機ノーマル機の挙動からは補完せず、性能コアの `COMPLETE_CORE` は維持してreset側のみ `PARTIAL_RESEARCH_EXHAUSTED` とした。

## sources

取得日: 2026-09-11

1. 山佐ネクスト公式「機種情報：ピカゴロウV」
   - https://yamasa-next.co.jp/model_pkv/
   - 5号機、Aタイプ、稼働時期2007年3月、完全告知仕様
   - confidence: OFFICIAL
2. グリーンべると / P-WORLD業界ニュース「人気の完全告知機『ピカゴロウ』が復活」2007-03-16
   - https://news.p-world.co.jp/articles/2102/greenbelt
   - 型式名ピカゴロウV-B、4段階設定、BIG/SMALL/合算端点、BIG平均335枚、SMALL平均104枚、1000円約35〜36G、西日本3/18・その他3/25納品予定
   - confidence: INDUSTRY
3. P-WORLD「ピカゴロウV」
   - https://www.p-world.co.jp/machine/database/4662
   - 型式名ピカゴロウV-B、BIG360枚以上払い出し終了、SMALL120枚以上払い出し終了
   - confidence: HIGH
4. pacnk「ピカゴロウV 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_pikagorouv.html
   - 設定1〜4のBIG/REG、PAYOUT
   - confidence: ANALYSIS_SINGLE
5. パチスロ救急車「ピカゴロウV・完全攻略情報」
   - https://www.eightbeat.com/slot99/kishu/ha_gyou/hi/pikagorouV/page_menu.html
   - 5号機、天井なし、RT等付加機能なし、設定別BIG/REG/合算、BIG約335枚、REG約105枚
   - confidence: ANALYSIS_SINGLE
6. K-Navi「ピカゴロウV」
   - https://p-kn.com/slot/698/
   - 5号機完全告知機としての概要を再確認。reset固有契約の掲載は確認できず。
   - confidence: ANALYSIS_SINGLE

## missingFields

- 設定別機械割の別系統ソース照合
- 設定変更時固有挙動
- 据え置き/電源OFF→ON時固有挙動
- 本機固有の変更判別（ガックン等）
- 公開朝一数値

## conflicts

- 現時点で性能コアの明確な数値CONFLICTなし。
- SMALL純増は当時業界記事約104枚、旧攻略資料約105枚。丸め差として双方を保持しCONFLICT扱いにはしない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
