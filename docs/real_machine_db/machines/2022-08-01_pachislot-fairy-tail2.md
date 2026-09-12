# パチスロ FAIRY TAIL2

recordNo: 1510
machineName: パチスロ FAIRY TAIL2
manufacturer: 藤商事
formalModel: S FAIRY TAILXX FA
inspectionCode: 2S0350
releaseDate: 2022-08-01
generation: 6.5号機
systemType: AT / 差枚数管理型

## payoutRateBySetting
- 設定1: 97.5%
- 設定2: 98.5%
- 設定3: 100.1%
- 設定4: 105.0%
- 設定5: 107.2%
- 設定6: 110.1%

信頼度: HIGH

## initialHitBySetting
### CZ「FAIRY BATTLE CHALLENGE」
- 設定1: 1/242.1
- 設定2: 1/234.5
- 設定3: 1/223.5
- 設定4: 1/206.7
- 設定5: 1/201.8
- 設定6: 1/187.1

### AT「FAIRY BATTLE」
- 設定1: 1/459.3
- 設定2: 1/432.1
- 設定3: 1/393.9
- 設定4: 1/337.4
- 設定5: 1/321.7
- 設定6: 1/273.6

藤商事公式と1gekiで一致。

信頼度: HIGH / OFFICIAL_CORE

## baseGamesPer50
- 約32.9G/50枚

信頼度: HIGH

## netIncrease
- AT前半「索敵MODE」: 約+0.6枚/G
- AT後半「バトルMODE」: 約+3.2枚/G
- 上位「魔竜決戦」も純増変動型

信頼度: HIGH

## basicPayout
- FAIRY BATTLEは索敵MODE16G + バトルMODE20or30or50G+αを基本単位としてループ。
- AT初当り時の期待値: 約620枚OVER（メーカー/業界発表系）。
- スペシャルAT「魔竜決戦」平均獲得期待値: 約3,000枚（当選までの差枚状態を考慮した期待値）。

信頼度: HIGH

## modeSpecificMinimumData
- 新内規対応の6.5号機・差枚数管理型AT。
- 通常時は依頼書を集め、CZ「FAIRY BATTLE CHALLENGE」経由でATを目指す。
- 規定G数天井: 1536G+α。到達後のCZ失敗時は特殊モードへ移行し、次回ハッピーポイント100pt到達でAT。
- ハッピーポイント天井: 通常777pt / チャンス500pt / 天国300pt / 特殊100pt。
- 有利区間ランプ非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_DIRECT_MODE_BENEFIT
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井RESET。
- 内部モードは再抽選。
- 非有利区間のエクシードステージを経由して有利区間へ移行する。

### carryOverBehavior
- 据え置き時は天井・内部モード・有利区間を引き継ぐ機種別朝一表を確認。
- 一般論ではなくFAIRY TAIL2個別資料に基づく。

### powerCycleBehavior
- 純電源OFF→ON: 有利区間CARRY_OVER。
- 天井CARRY_OVER。
- 内部モードCARRY_OVER。

### gameCounterReset
- 設定変更時: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 設定変更専用の固定短縮G数天井は確認されず、規定G数天井は1536G+α。
- ただし設定変更時はモード再抽選によりハッピーポイント天井が優遇される可能性が高い。

### modeAfterReset
- 通常/チャンス/天国/特殊の4モード。
- 設定変更時およびAT終了後は約55%でチャンスモード以上。
- ハッピーポイント天井は通常777pt / チャンス500pt / 天国300pt / 特殊100pt。
- 特殊モードは100pt到達でAT当選濃厚。

### stateAfterReset
- 設定変更時は内部モード再抽選。
- 純電源OFF→ONは内部モード引継ぎ。
- モード以外の高確等の詳細状態契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更時: RESET。
- AT終了後も有利区間リセット契機。
- 有利区間ランプ非搭載のためランプ判別不可。

### resetBenefits
- 設定変更時は約55%でチャンスモード以上を選択。
- チャンス以上ではハッピーポイント天井が通常777ptより短く、チャンス500pt / 天国300pt / 特殊100pt。
- 固定G数天井短縮ではなく、モード再抽選による朝一優遇として記録。

### resetPenalties
- 設定変更固有の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ非搭載。
- 本機固有ガックン/初期出目による直接判別は検索語を変えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- エクシードステージ後のモード示唆は朝一モード推測材料にはなるが、設定変更確定判別とはしない。

### numericResetData
- 設定変更時/AT終了後: チャンスモード以上 約55%。
- ハッピーポイント天井: 通常777pt（平均約474G）/ チャンス500pt（約292G）/ 天国300pt（約158G）/ 特殊100pt（約39G）。
- 規定G数天井: 1536G+α。

### publicMorningNumbers
- チャンスモード以上 約55%。
- モード別ハッピーポイント天井 777/500/300/100pt。

### resetBehavior 再探索メモ
- 検索語: `パチスロ FAIRY TAIL2 / フェアリーテイル2 / S FAIRY TAILXX FA / 藤商事 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / 有利区間 / チャンスモード`。
- 藤商事公式、業界記事、HAZUSE、1geki、当時攻略、後年解析を横断。
- 設定変更RESET・純電断引継ぎ、約55%チャンス以上、有利区間ランプ非搭載を機種固有資料で固定。

## sources
取得日: 2026-09-13

1. 藤商事公式 — パチスロ FAIRY TAIL2
   - https://www.fujimarukun.co.jp/products/s_fairytail2/
   - CZ/AT設定別確率、新内規対応差枚数管理型
   - reliability: OFFICIAL
2. 遊技日本 — FAIRY TAIL2発売発表
   - https://yugi-nippon.com/pachinko-new-machine/post-52097/
   - 型式S FAIRY TAILXX FA、8月1日導入、約3,000枚期待値
   - reliability: INDUSTRY_HIGH
3. 遊技日本 / P-WORLD — 試打記事
   - https://news.p-world.co.jp/articles/21262/nippon
   - 索敵16G 0.6枚/G、バトル20/30/50G+α 3.2枚/G
   - reliability: INDUSTRY_HIGH
4. HAZUSE — FAIRY TAIL2
   - https://hazuse.com/machine/pachislot/2S0350/
   - 型式、検定番号2S0350、出玉率、純増、導入日
   - reliability: ANALYSIS_HIGH
5. 1geki — FAIRY TAIL2
   - https://1geki.jp/slot/s_fairytail2/
   - 設定別CZ/AT/出玉率、導入日
   - reliability: ANALYSIS_HIGH
6. 1geki — 天井/設定変更/モード
   - https://1geki.jp/slot/s_fairytail2/3/
   - 1536G+α、モード別pt天井、設定変更時/AT後55%でチャンス以上
   - reliability: ANALYSIS_HIGH
7. スロぱちクエスト — 天井/朝一
   - https://www.slopachi-quest.com/article/fairytail2-tenjou/
   - 設定変更時: 有利区間/天井/内部モードRESET、電源OFF ON: 引継ぎ、ランプ非搭載
   - reliability: ANALYSIS_HIGH
8. Flick7 — FAIRY TAIL2解析
   - https://flick7.net/slot/fairytail2__k.php
   - 32.9G/50枚、純増、設定変更約55%チャンス以上、モード別pt天井
   - reliability: ANALYSIS_HIGH
9. なな徹 — 通常時モード
   - https://nana-press.com/kaiseki/machine/396/10666/
   - 設定変更後/AT終了後55%でチャンスモード以上
   - reliability: ANALYSIS_HIGH
10. Greenbelt / P-WORLD — 2022-08-01新台スケジュール
   - https://news.p-world.co.jp/articles/21319/greenbelt
   - 同日群が黄門ちゃま喝2 / FAIRY TAIL2
   - reliability: INDUSTRY_HIGH

## missingFields
- モード以外の設定変更直後の詳細内部状態
- 本機固有ガックン/初期出目判別

## conflicts
- 重大な性能数値CONFLICTなし。
- 1536G+α天井は「到達即AT」ではなく、到達後CZ成功またはCZ失敗後特殊モード→100ptでATという説明差があるため、簡略表記と詳細契約を分離して保存。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_WITH_DIRECT_MODE_BENEFIT
confidence: OFFICIAL_HIGH_CORE / HIGH_RESET
