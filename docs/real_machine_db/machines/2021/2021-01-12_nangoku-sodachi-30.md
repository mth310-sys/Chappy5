# 南国育ち-30

No: 1389
machineName: 南国育ち-30
machineNameVariants: 南国育ち-30 / 南国育ち30 / 南国育ちー30 / S南国育ちA5-30
manufacturer: アムテックス / 平和
releaseDate: 2021-01-12
formalModelName: S南国育ちA5-30
certificationNumber: 0S0191

generation: 6.1号機
systemType: AT / 擬似ボーナス連チャン / 完全告知 / 30Φ沖スロ

## identity / release
- HAZUSE機種DBで型式 `S南国育ちA5-30`、検定番号 `0S0191`、導入開始日2021-01-12、メーカーアムテックスを確認。
- K-Navi、イチカツ、2021年1月新台カレンダーでも2021-01-12導入で一致。
- 平和は2020-10-05にアムテックス製「南国育ち-30」を発表し、2021年1月導入予定としている。
- reliability: INDUSTRY / DATABASE_HIGH / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.4% |
| 2 | 99.2% |
| 3 | 101.5% |
| 4 | 105.3% |
| 5 | 108.8% |
| 6 | 113.8% |
- HAZUSE、イチカツ、複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
主要初当たりはボーナスAT初当たりを採用。

| 設定 | ボーナス初当たり |
|---:|---:|
| 1 | 1/354.7 |
| 2 | 1/339.5 |
| 3 | 1/328.7 |
| 4 | 1/316.8 |
| 5 | 1/308.0 |
| 6 | 1/298.6 |
- K-Navi、HAZUSE、イチカツ、なな徹系資料で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約36.1G/50枚。
- イチカツ、当時事前スペック資料、後年整理資料で一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- 約6.2枚/G。
- 平和発表を扱う業界記事、HAZUSE、K-Navi、パチマガスロマガで一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- BIG CHANCE: 40G、解析上の獲得目安約240枚。業界発表では約248枚期待表記もある。
- REGULAR CHANCE: 20G、解析上の獲得目安約120枚。業界発表では約124枚期待表記もある。
- ENDING BONUS: 有利区間完走時の擬似ボーナス。
- 240/120は解析上の丸め代表値、248/124は純増6.2枚×G数に対応する期待枚数表記として定義差を保持しCONFLICT扱いしない。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常A～E、準備A～E、天国A/B/C/SPを持つモード型AT。
- ボーナス最終8G「バタフライゾーン」で蝶が飛べば1G連。
- 天国モードはボーナス1G連確定、ループ率は天国A約53%、B約75%、C約80%、SP約96%とされるが、通常時全モード移行詳細は物差し対象外。
- 通常時最大天井は996G。設定変更後は796G、通常C/準備C以上滞在時は401G。
- 有利区間は通常A/準備Aで37～100G、通常B/準備Bで137～200Gの間にリセット、通常C/準備C以上はボーナス当選までリセットなし。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_MORNING_MODE_TABLE
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は有利区間RESET、天井RESET、内部モードRESET。
- 設定変更後は専用の初期モード振り分けを使用する。
- 設定変更後の天井は796Gへ短縮される。
- 有利区間ランプは設定変更時に消灯。

### carryOverBehavior
- 据え置きは設定変更を伴わないため、有利区間・天井進行・内部モードを前日の状態から引き継ぐ契約として扱う。
- 朝一で有利区間ランプ点灯なら据え置き濃厚。
- 前日終了時点が非有利区間や店側対策を含む場合があるため、ランプ単独を絶対確定条件にはしない。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間・天井・内部モードをCARRY_OVER。
- HAZUSEおよびなな徹の本機専用朝一表で、設定変更=RESET / 電源OFF-ON=引継ぎを一致確認。

### gameCounterReset
- 設定変更: 天井進行をRESET。
- 据え置き / 純電断: 天井進行をCARRY_OVER。
- 通常最大天井996Gだが、設定変更後は専用796G天井へ切り替わる。

### ceilingAfterReset
- 設定変更後天井: 796G。
- 通常時最深天井: 996G。
- ボーナス後、通常Cまたは準備C以上滞在時: 401G。
- 設定変更後は通常最深より200G短い明確な朝一恩恵。

### modeAfterReset
設定変更後の初期モード振り分けは全設定共通。

| モード | 振り分け |
|---|---:|
| 通常A | 54.06% |
| 通常B | 9.09% |
| 通常C | 9.86% |
| 通常D | 9.86% |
| 通常E | 17.13% |

- 丸め表記では 54.1 / 9.1 / 9.9 / 9.9 / 17.1%。
- 通常C以上合計は36.85%。
- 1gekiの「設定変更後以外」の有利区間移行時は通常A69.92 / B4.69 / C12.50 / D12.50 / E0.39%であり、設定変更時は通常E選択率が大幅に高い。
- これは朝一客行動へ直結するためnumericResetDataへ保存する。

### stateAfterReset
- 公開資料では「内部モードRESET」が明示される。
- モード以外に独立した高確/低確状態を設定変更時にどう再抽選するかという本機固有の追加状態契約は、高信頼な直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 物差し上は公開された通常A～Eの初期モード契約を主要朝一状態として扱う。

### advantageousSectionReset
- 設定変更: RESET / 有利区間ランプ消灯。
- 据え置き / 純電断: CARRY_OVER / ランプ点灯状態を引継ぎ。
- 通常A/準備Aは37～100G、通常B/準備Bは137～200Gの間に区間リセット。通常C/準備C以上は次回ボーナスまで区間リセットなし。
- 有利区間ランプ消灯の非有利区間中は確定役合成約1/1260まで上昇する公開解析があり、朝一設定変更後の非有利区間は短時間ながら客側の追う理由になる。

### resetBenefits
- 最大天井が996G→796Gへ200G短縮。
- 設定変更専用初期モード振り分けで通常Eが17.13%。
- 通常C以上合計36.85%で、設定変更後以外の有利区間移行時25.39%より高い。
- 非有利区間中は確定役合成約1/1260で、成立時は最低でもBIG+天国濃厚とされる。中段チェリーはフリーズ濃厚。
- ただし非有利区間抽選は設定変更専用ではなく、有利区間リセット時共通仕様として分離して扱う。

### resetPenalties
- 公開された設定変更専用の定量的不利要素は確認できない。
- 朝一モードが必ず上位になるわけではなく、通常Aが54.06%を占めるため「リセット=高モード確定」ではない。

### resetDetection
- 有利区間ランプはクレジット右下ドット。
- 朝一消灯: 設定変更濃厚。
- 朝一点灯: 据え置き濃厚。
- 通常時にランプが点灯する機種のため判別材料として強い。
- 店側が設定変更後に回す等の対策、前日終了状態、ランプ消灯タイミングの見逃しがあり得るため、絶対確定条件としては扱わない。
- `南国育ち-30 / 南国育ち30 / S南国育ちA5-30 / アムテックス` と `ガックン / リール / 朝一 / リセット / 設定変更` を組み替え、攻略・当時記事・旧DB・回顧資料を再探索したが、本機固有のガックン条件・発生率を高信頼直接資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 設定変更後天井: **796G**。
- 通常時最深天井: **996G**。
- 通常C/準備C以上時天井: **401G**。
- 設定変更時初期モード: **A54.06 / B9.09 / C9.86 / D9.86 / E17.13%**。
- 設定変更時通常C以上: **36.85%**。
- 設定変更後以外の有利区間移行時通常C以上: **25.39%**（比較参考値、設定変更専用値ではない）。
- 非有利区間確定役合成: **約1/1260**（有利区間リセット時共通、設定変更専用ではない）。
- 朝一特定G以内のボーナス当選率を「設定変更専用の固定値」として示す高信頼資料は確認できず、推定しない。

## resetBehavior 再探索メモ
2026-09-12。`南国育ち-30 / 南国育ち30 / 南国育ちー30 / S南国育ちA5-30 / アムテックス / 平和` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 796G / 996G / モード / 初期モード / 有利区間 / ランプ / ガックン / 非有利区間` を組み替え、平和発表を扱う当時業界記事、HAZUSE、1geki、なな徹、パチマガスロマガ、K-Navi、イチカツ、旧機種DB、後年回顧資料を横断。設定変更/電断の有利区間・天井・内部モード、設定変更後796G、初期モード表、ランプ判別は複数系統一致。独立した内部高確状態と本機固有ガックン条件/率は十分な再探索後も固定できずUNVERIFIEDとした。

## conflicts
- basicPayout: 業界発表はBIG約248枚/REG約124枚、解析DBは約240枚/約120枚。純増約6.2枚×40G/20Gに伴う期待値と丸め代表値の定義差と判断し、canonicalは比較用に約240/120枚、248/124枚も併記。
- メーカー表記: 製造元はアムテックス、販売・シリーズ発表主体は平和。manufacturerはアムテックス / 平和として関係を明示。

## missingFields
- 設定変更時に通常A～E以外で独立して再抽選される内部高確/低確状態の固定表: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の固定された朝一特定G以内ボーナス当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-12

### identity / industry
- https://hazuse.com/machine/pachislot/0S0191/genre/201/
- https://web-greenbelt.jp/post-41549/
- https://www.pidea.jp/articles/1601974622
- https://p-kn.com/slot/3494/
- https://1geki.jp/newmachinecalender/202101/
- https://p-kn.com/calendar/202101/

### core performance
- https://hazuse.com/machine/pachislot/0S0191/genre/201/
- https://hazuse.com/machine/pachislot/0S0191/genre/209/
- https://ichikatsu.com/nangoku30/
- https://p-kn.com/slot/3494/
- https://nana-press.com/kaiseki/machine/94/2660/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/04/kh01.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/04/bn01.php

### reset / morning
- https://hazuse.com/machine/pachislot/0S0191/genre/207/
- https://1geki.jp/slot/nangoku30/3/
- https://1geki.jp/slot/nangoku30/43/
- https://1geki.jp/slot/nangoku30/41/
- https://nana-press.com/kaiseki/machine/94/2662/
- https://nana-press.com/kaiseki/machine/94/2661/
- https://ichikatsu.com/nangoku30/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/04/tj05.php
