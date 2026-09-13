# 真天下布武

recordNo: 1570
machineName: 真天下布武
manufacturer: 山佐製造 / 山佐ネクスト販売
formalModel: S真天下布武DD
inspectionCode: 230183
releaseDate: 2023-06-05
generation: 6.5号機 / メダル機
systemType: AT / ゲーム数・CZ管理型
settings: L / 1 / 2 / 4 / 5 / 6（通常比較値は1/2/4/5/6）

## payoutRateBySetting
- 設定1: 97.7%
- 設定2: 99.0%
- 設定4: 103.0%
- 設定5: 108.5%
- 設定6: 112.2%
信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT「覚醒」
- 設定1: 1/374.5
- 設定2: 1/337.9
- 設定4: 1/267.7
- 設定5: 1/206.2
- 設定6: 1/166.9
### CZ「出陣チャレンジ」
- 設定1: 1/116.7
- 設定2: 1/110.3
- 設定4: 1/97.7
- 設定5: 1/86.0
- 設定6: 1/75.9
信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約34.2G/50枚（設定1）。

## netIncrease
- AT純増: 約2.5枚/G。

## basicPayout
- AT「覚醒」: 1セット10～30G。天下DASH当選高確率ゾーンで、公開値では約1/8で天下DASHを抽選。
- 天下DASH: 10G or 30G、純増約2.5枚/G。
- 天下ボーナス / 殲滅ボーナス: 20G固定、平均約50枚とする解析あり。
- AT終了後は55G+α以内にCZ「出陣チャレンジ」へ当選する「55チャンス」。

## modeSpecificMinimumData
- 通常時最大天井: 999G+α → AT「覚醒」。
- モード別天井: 信長A/B 777G+α、信長SP 555G+α、秀吉A/B 777G+α、秀吉SP 111G+α、家康A/SP 999G+α。
- 777Gを超えた場合は家康モード濃厚とする解析あり。
- 有利区間移行時の秀吉モード選択率に設定差あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_MODE_DATA
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時: 有利区間RESET / 天井RESET / 内部モードRESET / 内部状態RESET。
- 設定変更後はAT終了後と同様、CZ非当選のまま55G+α消化するとCZ当選。
- 有利区間移行時のモードを再抽選し、高設定ほど秀吉モード選択率が高い。

### carryOverBehavior
- 据え置き時の天井・内部モード・内部状態はCARRY_OVERとして扱う解析が複数存在。
- 有利区間も継続中はCARRY_OVER。

### powerCycleBehavior
- 純電源OFF→ON: 有利区間 / 天井 / 内部モード / 内部状態をCARRY_OVER。
- パチマガスロマガの本機固有比較表で直接確認。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 最大天井999G+α。

### ceilingAfterReset
- 設定変更専用の固定ゲーム数天井短縮ではなく、モード再抽選と「55G+α以内CZ」が朝一挙動の中心。
- 設定変更後も最大ゲーム数天井は選択モードに依存し、公開上の最大は999G+α。

### modeAfterReset
- 設定変更 / 有利区間リセット時に信長・秀吉・家康系モードを再抽選。
- 公開されている秀吉モード移行率:
  - 設定1: 14.5%
  - 設定2: 17.6%
  - 設定4: 25.0%
  - 設定5: 31.3%
  - 設定6: 37.5%
- 信長 / 家康への残余振り分けは資料上「調査中」が残るため推測配分しない。
- 据え置き / 純電源OFF→ON: 内部モードCARRY_OVER。

### stateAfterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### advantageousSectionReset
- 設定変更: RESET。
- 純電源OFF→ON: CARRY_OVER。
- 通常遊技中の有利区間リセット条件として、解析では①有利区間1500G以上、②区間差枚+1000枚以上、③天下MAP「-」でAT終了時（レアケース）を公開。

### resetBenefits
- 設定変更後は55G+α以内にCZ当選。
- 有利区間移行時に秀吉モードから始まる可能性があり、高設定ほど選択率上昇。
- 秀吉SPなら111G+α天井など、再抽選先次第で早いAT当選に期待できる。

### resetPenalties
- 設定変更により前日の天井進行、内部モード、内部状態を失う。
- 前日有利なモード / 状態を保持していた場合もRESETされる。
- その他の設定変更専用不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン条件 / 発生率は、機種名・正式型式・山佐と設定変更/リセット/据え置き/ガックンを組み替えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更 / AT後はいずれも55G+α以内CZのため、それ単独では変更確定材料にならない。
- 開始ステージは比較資料で待機中ステージとされ、変更判別の確定材料とはされていない。

### numericResetData
- 有利区間移行時・設定変更後の秀吉モード選択率: 14.5 / 17.6 / 25.0 / 31.3 / 37.5%（設定1/2/4/5/6）。
- 設定変更後: CZ非当選なら55G+αでCZ当選。
- 通常最大天井: 999G+α。

### publicMorningNumbers
- 朝一 / 設定変更後55G+α以内CZ。
- 秀吉モード選択率: 設定1 14.5% → 設定6 37.5%。
- モード別最短天井: 秀吉SP 111G+α。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `真天下布武 / S真天下布武DD / 山佐 / 山佐ネクスト` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 秀吉モード / ガックン / 有利区間` を組み替えて横断。
- パチマガスロマガ、一撃、ちょんぼりすた、スロパチクエスト、パチスロメソッド、業界記事、旧DBを照合。

## sources
取得日: 2026-09-13
- 遊技日本 / 山佐ネクスト発表（型式・主要仕様）: https://news.p-world.co.jp/articles/23148/nippon
- G-net 納期変更・スペック: https://g-net-ps.com/info/s0058/
- HAZUSE（型式 / 検定番号230183 / 6月5日）: https://hazuse.com/zh-hans/machine/pachislot/SX0047/
- グリーンべると / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/23254/greenbelt
- パチマガスロマガ 朝一・設定変更: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/249/kr01-3.php
- 一撃 天井・設定変更: https://1geki.jp/slot/s_shin_tenkafubu/3/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/183790/
- なな徹: https://nana-press.com/kaiseki/machine/532/
- スロパチクエスト: https://www.slopachi-quest.com/article/sintenkahubu-settei/
- パチスロメソッド: https://slotmethod.jp/archives/16801/

## missingFields
- 本機固有ガックン: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の信長 / 家康モード具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 導入時期は初期発表で2023年5月上旬予定、K-Naviにも5/8表記が残るが、G-netが納品5/7→6/4・開店5/8→6/5への納期変更を明示し、複数の実導入資料も6/5で一致。canonicalは2023-06-05。旧5/8は延期前予定値として保持。

coreStatus: COMPLETE_CORE
status: COMPLETE_CORE_RESET_V07
