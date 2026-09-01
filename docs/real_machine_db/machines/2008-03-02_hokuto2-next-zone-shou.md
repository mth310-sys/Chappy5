# パチスロ北斗の拳2 ネクストゾーン将

machineName: パチスロ北斗の拳2 ネクストゾーン将
manufacturer: サミー
modelName: 北斗の拳2ZS
releaseDate: 2008-03-02
generation: 5号機初期
systemType: ボーナス主体 + RT（北斗BIG後/天井救済RT）
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## payoutRateBySetting
### 5号機まとめwiki系列
|設定|機械割|
|---:|---:|
|1|96.4%|
|2|98.4%|
|3|100.4%|
|4|103.1%|
|5|107.1%|
|6|113.1%|

### 当時ブログ/事前解析系列
|設定|機械割|
|---:|---:|
|1|96.8%|
|2|98.4%|
|3|102.0%|
|4|104.6%|
|5|107.3%|
|6|111.9%|

reliability: CONFLICT

- 両系列は設定2付近のみ一致し、設定3〜6は丸め差では説明しにくい差があるため平均化しない。
- 当時業界史には「割は約113%」との記録もあり、5号機まとめwiki系列の設定6 113.1%とは整合するが、設定別全段階の一次公表表は今回確定できていない。

## initialHitBySetting
|設定|BIG|MIDDLE|ボーナス合成|
|---:|---:|---:|---:|
|1|1/290.0|1/524.3|1/186.7|
|2|1/282.5|1/461.5|1/175.2|
|3|1/276.5|1/414.8|1/165.9|
|4|1/268.6|1/348.6|1/151.7|
|5|1/251.1|1/354.3|1/146.9|
|6|1/235.7|1/288.7|1/129.8|

reliability: ANALYSIS_HIGH

- K-Naviの丸め値（BIG 1/290→1/236、MID 1/524→1/289、合成1/187→1/130）と整合。
- グリーンべると当時業界記事も合成1/187（設定1）〜1/130（設定6）と報道。

## baseGamesPer50
|設定|50枚あたりゲーム数|
|---:|---:|
|1|35.96G|
|2|36.40G|
|3|37.10G|
|4|37.40G|
|5|37.94G|
|6|38.06G|

reliability: ANALYSIS_HIGH

- K-Navi「小役確率」に設定別1000円あたりゲーム数として掲載。

## netIncrease
- RT（北斗BIG後/慈愛放出機能）: 現状維持程度
- 北斗図柄揃いBIG後: 次回ボーナス成立までRT
- 北斗図柄以外のBIG後999G消化: 次回ボーナスまで天井RT
- MIDDLE後666G消化: 次回ボーナスまで天井RT

reliability: ANALYSIS_HIGH

- グリーンべると、5号機まとめwiki、当時ブログで構造が一致。
- 1Gあたりの比較可能な純増数値は今回確定できず、推測せず「現状維持程度」の公開表現を保持。

## basicPayout
- BIG: 純増約312枚（345枚超払い出しで終了）
- MIDDLE: 通常手順で約104枚の当時解析記録あり
- MIDDLE: スイカを1度成立させる手順で約116枚という当時記録あり
- K-Navi上のMIDDLE終了条件: 119枚超払い出しで終了

reliability: ANALYSIS_HIGH

- BIG約312枚はグリーンべると、K-Navi、当時ブログ、パチ7回顧で一致。
- MIDDLEは「約100枚」「約104枚」「技術介入で約116枚」が混在するが、取得手順・丸めの定義差として分離保持し、単一値へ平均化しない。

## modeSpecificMinimumData
- 『闘』とは別型式・別スペック。『将』はボーナス主体の一般的なゲーム性。
- 北斗BIG（ALL北斗）は1/8192で、成立後は次回ボーナスまでRT。
- 北斗図柄以外のBIG後999G、MIDDLE後666Gで救済RT「慈愛放出機能」に突入し、次回ボーナスまで継続。
- RT純増は現状維持程度。
- 2008-02-01のグリーンべるとで型式名「北斗の拳2ZS」、納品2008-03-02開始予定を確認。

## resetBehavior
settingChangeBehavior: `COUNTER_CARRYOVER_CONFIRMED_SINGLE_SOURCE` — 当時事前解析記録に「設定変更後も前日のG数を引き継ぐため、宵越し天井狙い有効」と明記。少なくともBIG後999G/MIDDLE後666Gの天井到達用G数は設定変更で0クリアされない記録を採用。
carryOverBehavior: `CARRYOVER_CONFIRMED` — 据え置きでは天井用G数を引き継ぐ前提で宵越し狙いが成立する。設定変更でも引継ぎ記録があるため、据え置き時にリセットされる根拠はない。
powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみを設定変更/据え置きと切り分けて、天井G数・RT状態を直接明記した本機固有資料は今回確定できず。
gameCounterReset: `NO_RESET_ON_SETTING_CHANGE_CONFIRMED_SINGLE_SOURCE` — 北斗図柄以外BIG後999G/MIDDLE後666Gの救済RT用カウンタは設定変更後も前日のG数を引き継ぐとする当時記録あり。
ceilingAfterReset: `NO_SHORTENING_CONFIRMED` — 設定変更専用の天井短縮値は確認されず。むしろ前日G数引継ぎ記録あり。
modeAfterReset: `NONE_CONFIRMED` — 通常時に朝一専用モード/設定変更専用モード再抽選の公開資料は確認されず。
stateAfterReset: `UNVERIFIED_AFTER_RESEARCH` — RT中に設定変更した場合のRT継続/終了、ボーナス後種別状態の扱いを直接明記した資料は未確定。
advantageousSectionReset: `NOT_APPLICABLE` — 有利区間導入前の5号機。
resetBenefits: `NONE_CONFIRMED` — 設定変更だけで付与される専用恩恵は確認されず。天井G数を引き継ぐため、前日ハマリが残る場合は結果的に朝一狙い対象となる。
resetPenalties: `NONE_CONFIRMED`
resetDetection: `UNVERIFIED_AFTER_RESEARCH` — 本機固有のガックン、初期出目、液晶/ランプ等で設定変更/据え置きを判別する直接資料は確定できず。設定変更でもG数を引き継ぐため、天井到達G数だけでは変更判別材料にならない。
numericResetData:
- 北斗図柄以外BIG後天井RT: 999G
- MIDDLE後天井RT: 666G
- 設定変更時天井G数: 前日から引継ぎ（当時単一資料）
- リセット短縮天井: NONE_CONFIRMED
- 朝一専用モード振り分け: NONE_CONFIRMED
- 設定変更専用恩恵発生率: NONE_CONFIRMED

### resetBehavior探索メモ
`北斗の拳2 ネクストゾーン将 / 北斗の拳2ZS / Next-Zone 将 / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 999G / 666G / 慈愛放出機能 / RT / ガックン / 初期出目` を組み替え、当時業界記事、K-Navi、5号機当時wiki、当時ブログ/事前解析、旧業界史、後年回顧を横断した。

設定変更でも天井用G数を引き継ぐという本機固有の当時記録を確認できたため、ここはUNVERIFIEDに落とさず単一ソース確認として保存。一方、電源OFF→ON単独、RT中の設定変更、ガックン等の変更判別は直接資料を確定できなかったため推測しない。

## releaseTiming
- グリーンべると（2008-02-01）: 『闘』『将』2機種を発表し、納品は2008-03-02からスタート予定と明記。
- 2008年当時の業界史更新記録も北斗の拳2ZSを2008年3月発売系列としている。
- 一部後年資料の2月表記より、当時業界一次資料の納品開始予定日を優先し `2008-03-02` を採用。

## sources
取得日: 2026-09-01
1. グリーンべると「『北斗の拳』最新シリーズ、2機種デビュー」 — https://web-greenbelt.jp/00003486/ — 2008-02-01、型式北斗の拳2ZS、納品2008-03-02開始予定、合成1/187〜1/130、BIG約312枚/MID約100枚、北斗BIG後無限RT、BIG後999G/MID後666G救済RT — reliability: INDUSTRY
2. K-Navi「パチスロ北斗の拳2 ネクストゾーン将」 — https://p-kn.com/slot/761/ — 設定別BIG/MID/合成、345枚超/119枚超払い出し終了、天井搭載 — reliability: ANALYSIS_HIGH
3. K-Navi「小役確率」 — https://p-kn.com/slot/761/4948/ — 設定別1000円あたりゲーム数35.96〜38.06G、小役設定差 — reliability: ANALYSIS_HIGH
4. パチスロ5号機まとめwiki「北斗の拳2 Next-Zone 将」 — https://w.atwiki.jp/5gouki/pages/103.html — 2008-07-15最終更新、精密ボーナス確率、機械割96.4〜113.1%、北斗BIG後/999G/666G RT — reliability: ANALYSIS_SINGLE
5. 侍～samurai～777ブログ「北斗の拳2ZS将」 — https://ameblo.jp/samurai777net/entry-10068777359.html — 当時事前解析、BIG約312枚/MID約104枚（スイカ成立で約116枚）、設定変更後も前日G数引継ぎ、機械割96.8〜111.9% — reliability: ANALYSIS_SINGLE
6. キリアのスロット日記 2008年1月「北斗の拳2ZS将」 — https://plaza.rakuten.co.jp/kirialoverio/backnumber/200801/ — 当時掲載、BIG/MID・機械割96.8〜111.9%、999G/666G天井RT — reliability: ANALYSIS_SINGLE
7. パチスロ業界初まとめ 更新情報4 — https://slothistory.com/kousin_kako04.html — 北斗の拳2ZS、2008年3月発売系列、型式名、機械割約113%との当時記録 — reliability: INDUSTRY/ARCHIVE
8. パチ7 北斗シリーズ回顧 — https://pachiseven.jp/news/index/page%3A48 — 2008年3月に闘と同時期、将はノーマルタイプ位置付け、BIG約312枚/MID約116枚、北斗BIG後RT — reliability: ANALYSIS_SINGLE

## missingFields
- 電源OFF→ON単独時の999G/666G天井カウンタ・RT状態の直接資料
- RT中に設定変更した場合のRT状態処理
- 本機固有のガックン/初期出目/表示による設定変更判別
- RTの比較可能な1G純増数値（公開表現は現状維持程度）
- 設定別機械割のメーカー一次表

## conflicts
- `CONFLICT_PAYOUT_RATE`: 5号機まとめwiki 96.4 / 98.4 / 100.4 / 103.1 / 107.1 / 113.1% vs 当時ブログ/事前解析 96.8 / 98.4 / 102.0 / 104.6 / 107.3 / 111.9%。平均化しない。
- `BASIC_PAYOUT_DEFINITION_DIFFERENCE`: MIDDLEは業界記事約100枚、当時解析約104枚、技術介入手順で約116枚、K-Naviは119枚超払い出し終了。定義/手順差を分離保持し、単純競合平均はしない。
