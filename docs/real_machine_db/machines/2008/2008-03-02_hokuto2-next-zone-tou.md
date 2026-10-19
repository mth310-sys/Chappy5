# パチスロ北斗の拳2 ネクストゾーン闘

machineName: パチスロ北斗の拳2 ネクストゾーン闘
manufacturer: サミー
modelName: 北斗の拳2NE
releaseDate: 2008-03-02
generation: 5号機初期
systemType: ボーナス + RT（覇王モード）
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## payoutRateBySetting
### 解析セブン系列
|設定|機械割|
|---:|---:|
|1|98.8%|
|2|100.8%|
|3|102.8%|
|4|105.0%|
|5|107.2%|
|6|109.7%|

### 後年回顧資料系列
|設定|機械割|
|---:|---:|
|1|97.8%|
|2|99.6%|
|3|101.4%|
|4|103.4%|
|5|105.5%|
|6|107.7%|

reliability: CONFLICT

- 設定別機械割に明確な資料差があるため平均化しない。
- 性能コア上は解析セブン系列を詳細解析値として保持し、後年回顧系列も競合値として残す。

## initialHitBySetting
|設定|BIG|MIDDLE|ボーナス合成|
|---:|---:|---:|---:|
|1|1/407.1|1/799.2|1/269.7|
|2|1/387.8|1/780.2|1/259.0|
|3|1/374.5|1/753.3|1/250.1|
|4|1/358.1|1/712.3|1/238.3|
|5|1/343.1|1/689.9|1/229.1|
|6|1/327.7|1/655.4|1/218.5|

reliability: ANALYSIS_HIGH

- K-Naviの丸め値（BIG 1/407→1/328、MID 1/799→1/655、合成1/270→1/219）とも整合。
- グリーンべるとも設定1〜6の合成を約1/270〜1/219と報道。

## baseGamesPer50
|設定|50枚あたりゲーム数|
|---:|---:|
|1|36.82G|
|2|37.26G|
|3|37.72G|
|4|38.17G|
|5|38.65G|
|6|39.26G|

reliability: ANALYSIS_HIGH

- K-Navi掲載値。
- 解析セブンは36.6 / 37.2 / 37.7 / 38.0 / 38.5 / 39.2Gで、丸め・算出精度差の範囲として扱う。

## netIncrease
- RT「覇王モード」: 約+0.05枚/G
- RT最大継続: 3000G
- RT継続率: 50% / 60% / 70% / 80% / 90% / 95%

reliability: ANALYSIS_HIGH

- 解析セブンで1Gあたり約+0.05枚、最大3000Gを確認。
- グリーンべると/K-Navi/後年回顧資料も前作の減少型RTから微増型へ改良、最大3000Gと一致。

## basicPayout
- BIG: 純増約264枚（345枚超払い出しで終了）
- MIDDLE: 純増約104枚（105枚超払い出しで終了）

reliability: ANALYSIS_HIGH

- グリーンべると、K-Navi、パチマガスロマガ、解析セブンで概ね一致。

## modeSpecificMinimumData
- 前作「北斗の拳2 乱世覇王伝 天覇の章」のゲーム性を継承したマイナーチェンジ機。
- 全ボーナス終了後にRT「覇王モード」へ突入。
- RTはチェリー入賞またはボーナス成立で終了。RT終了後はチャンスタイムへ移行し、チェリー入賞前のRT昇格抽選当選で元の継続率のRTへ復帰する。
- RTは1セット20〜100G構成、最大3000G。
- RT継続率は50〜95%の6段階。
- 通常時ゲーム数による天井は今回確認されていない。

## resetBehavior
settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH` — 設定変更時にRT継続率・RT/チャンスタイム状態・内部モードをどう処理するか、本機固有の直接資料を確定できず。
carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時のRT/チャンスタイム状態および継続率の保持を直接明記した資料は未確定。
powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみの場合のRT/チャンスタイム状態・継続率を設定変更と分離して明記した資料は未確定。
gameCounterReset: `NOT_APPLICABLE_TO_NORMAL_CEILING` — 通常時ゲーム数天井は確認されず。RTには最大3000Gの上限があるが通常時天井とは別物。
ceilingAfterReset: `NONE_CONFIRMED` — 設定変更専用の短縮天井・朝一天井は確認されず。
modeAfterReset: `UNVERIFIED_AFTER_RESEARCH` — RT継続率や通常時内部モードの設定変更時再抽選/引継ぎを直接明記した資料を確定できず。
stateAfterReset: `UNVERIFIED_AFTER_RESEARCH` — RT中/チャンスタイム中の設定変更・電断時状態を直接明記した資料は未確定。
advantageousSectionReset: `NOT_APPLICABLE` — 有利区間導入前の5号機。
resetBenefits: `NONE_CONFIRMED` — 朝一/設定変更時だけの専用恩恵や公開数値は確認されず。
resetPenalties: `NONE_CONFIRMED`
resetDetection: `UNVERIFIED_AFTER_RESEARCH` — 本機固有のガックン、初期出目、液晶/ランプ等による設定変更判別は直接資料を確定できず。
numericResetData:
- 通常時ゲーム数天井: NONE_CONFIRMED
- リセット短縮天井: NONE_CONFIRMED
- 朝一専用モード振り分け: NONE_CONFIRMED
- RT最大継続: 3000G（通常時天井ではない）

### resetBehavior探索メモ
`北斗の拳2 ネクストゾーン闘 / 北斗の拳2NE / NextZone 闘 / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT / 覇王モード / 継続率 / ガックン / 初期出目` を組み替え、当時業界記事、K-Navi、パチマガスロマガ、旧解析DB、回顧資料を横断した。

通常時天井なし相当、RT最大3000G、RT継続率と終了/再突入構造までは確認できた。一方、設定変更・据え置き・電源OFF→ON時にRT/チャンスタイム/継続率/内部モードをどう扱うか、本機固有の変更判別は直接根拠を確定できなかったため推測しない。

## releaseTiming
- グリーンべると（2008-02-01）: 『闘』『将』2機種を発表、納品は2008-03-02からスタート予定。
- サミーネットワークス発表転載（2008-02-18）: 777タウンで2月25日に『闘』テスト版を「ホールへの実機導入に先駆けて」先行導入すると明記。したがって2月25日時点ではホール実機導入前。
- 後年DBの一部に2008年2月表記があるが、当時業界一次資料と矛盾するため本DBでは3月導入系列を採用。
- releaseDateは納品開始予定日 `2008-03-02` を採用。

## sources
取得日: 2026-09-01
1. グリーンべると「『北斗の拳』最新シリーズ、2機種デビュー」 — https://web-greenbelt.jp/00003486/ — 2008-02-01発表、闘=北斗の拳2NE、将=北斗の拳2ZS、納品2008-03-02開始予定、闘のBB約264枚/MID約100枚/合成1/270〜1/219、RT最大3000G — reliability: INDUSTRY
2. 4Gamer「『777タウン.net』に『パチスロ北斗の拳2 ネクストゾーン闘』登場」 — https://www.4gamer.net/games/021/G002122/20080218018/ — 2008-02-25時点でホール実機導入前とするメーカー発表転載 — reliability: INDUSTRY
3. K-Navi「パチスロ北斗の拳2 ネクストゾーン闘」 — https://p-kn.com/slot/760/ — 設定別BIG/MID/合成、基本獲得、RT概要 — reliability: ANALYSIS_HIGH
4. K-Navi「小役確率」 — https://p-kn.com/slot/760/4922/ — 設定別1000円あたりゲーム数 — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「北斗の拳2乱世覇王伝ネクストゾーン闘」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/111/a.php — BIG約264枚/MIDDLE約104枚、微増RT、最大3000G — reliability: ANALYSIS_HIGH
6. 解析セブン「北斗の拳2 ネクストゾーン闘」 — https://crankyseven.com/sp/hokuto2_nexttou-pc.htm — 精密設定別BIG/MID/合成、機械割98.8〜109.7%、50枚ベース36.6〜39.2G、RT純増約+0.05枚/G、最大3000G、RT終了/再突入構造 — reliability: ANALYSIS_SINGLE
7. パチスロ北斗シリーズ機械割回顧資料 — https://www.marimo0925.net/pachisuro-hokutonoken-kikaiwari/ — 機械割97.8〜107.7%系列 — reliability: ANALYSIS_SINGLE
8. パチ7 北斗シリーズ回顧 — https://pachiseven.jp/news/index/page%3A48 — 2008年3月登場、前作からRTを微増型へ改良 — reliability: ANALYSIS_SINGLE

## missingFields
- 設定変更時のRT/チャンスタイム/継続率/内部モード処理
- 据え置き時のRT/チャンスタイム/継続率保持の直接資料
- 電源OFF→ON単独時のRT/チャンスタイム/継続率処理
- 本機固有のガックン/初期出目/表示等による変更判別
- ホール設置開始日の一次資料（日付は納品開始予定日を採用）

## conflicts
- `CONFLICT_PAYOUT_RATE`: 解析セブン 98.8 / 100.8 / 102.8 / 105.0 / 107.2 / 109.7% vs 後年回顧資料 97.8 / 99.6 / 101.4 / 103.4 / 105.5 / 107.7%。平均化しない。
- `CONFLICT_RELEASE_MONTH_SECONDARY`: 後年DBに2008年2月表記あり。一方、2008-02-01の業界記事は納品2008-03-02開始予定、2008-02-18メーカー発表転載も2/25オンライン先行導入を「ホール実機導入に先駆けて」とするため、本DBは2008-03系列を採用。
