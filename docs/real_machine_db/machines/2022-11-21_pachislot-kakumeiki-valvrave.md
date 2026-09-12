# パチスロ 革命機ヴァルヴレイヴ

recordNo: 1535
machineName: パチスロ 革命機ヴァルヴレイヴ
manufacturer: SANKYO
formalModel: L革命機ヴァルヴレイヴD
inspectionCode: 2S0869
releaseDate: 2022-11-21
generation: 6.5号機 / スマートパチスロ初期 / コンプリート機能搭載
systemType: AT / CZ→擬似ボーナス→AT / 上位AT搭載

## payoutRateBySetting
- 設定1: 97.3%
- 設定2: 98.3%
- 設定3: 100.8%
- 設定4: 103.2%
- 設定5: 107.9%
- 設定6: 114.9%

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### CZ「共闘Vチャレンジ」
- 設定1: 1/277
- 設定2: 1/275
- 設定3: 1/274
- 設定4: 1/269
- 設定5: 1/264
- 設定6: 1/258

### 初当たり（革命ボーナス / 決戦ボーナス / AT直撃を含む公開スペック上の初当たり）
- 設定1: 1/519
- 設定2: 1/516
- 設定3: 1/514
- 設定4: 1/507
- 設定5: 1/499
- 設定6: 1/490

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約31.3G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 革命ボーナス / 決戦ボーナス / AT「革命RUSH」: 約7.2枚/G。
- 上位AT「超革命RUSH」も約7.2枚/G。高継続ループ型。

信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## basicPayout
- 革命ボーナス: 50G+α、平均獲得約470枚、AT期待度約55%。払い出し666枚到達でAT濃厚。
- 決戦ボーナス: ナビ8回+α、平均獲得約110枚、AT期待度約35%。
- AT「革命RUSH」: 1セット10〜100G+α、ハラキリチャレンジを介したループ率約77%。
- 上位AT「超革命RUSH」: 革命RUSHから昇格、ループ率約90%。

信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は液晶ゲーム数管理のCZ天井と、実ゲーム数管理のボーナス天井を別系統で持つ。
- CZ間天井: モードA 1000G+α / B 700G+α / C 500G+α / D 300G+α（液晶ゲーム数）。
- ボーナス&AT間天井: 実ゲーム数1500G+αで革命ボーナスまたは決戦ボーナス。
- CZスルー天井: AT間でCZ最大7連続失敗後、次回CZ成功濃厚。5回/6回の振り分けも存在。
- 決戦ボーナス連続回数天井: AT間で決戦ボーナス4連続後、次回ボーナスは革命ボーナス濃厚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_GACKUN_AND_NO_PUBLISHED_RESET_MODE_PERCENTAGE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井RESET。
- モードRESET / 再抽選。
- 内部状態RESET。
- 開始ステージは咲森学園ステージ。
- 非有利区間から開始し、有利区間移行ゲーム（朝一1G目）の成立役でAT直撃抽選が行われる。
- 設定変更時はモードBへ移行しやすいことを複数解析資料で確認。ただし設定変更専用の全モード振り分け数値は公開確認できず、推測値は入れない。

### carryOverBehavior
- 据え置き時は有利区間・天井・モード・内部状態をCARRY_OVER。
- 長時間の電源OFFを伴う据え置きでは液晶上のゲーム数表示がリセットされても、内部ゲーム数等は引き継ぐ。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間CARRY_OVER。
- 天井CARRY_OVER。
- モードCARRY_OVER。
- 内部状態CARRY_OVER。
- 液晶上の表示ゲーム数は通常リセットされるが、電源OFF時間が短い場合は表示も引き継ぐ場合があると解析されている。
- 開始ステージは咲森学園ステージ。

### gameCounterReset
- 設定変更: CZ間液晶ゲーム数系統・ボーナス&AT間実ゲーム数系統ともRESET。
- 据え置き / 純電断: 内部CARRY_OVER。
- 液晶表示だけは電断後0相当に戻ることがあり、内部カウンタと表示を分離して扱う。

### ceilingAfterReset
- 固定の設定変更専用天井短縮値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし設定変更時はモードBへ移行しやすく、モードBならCZ天井は700G+α。モードCなら500G+α、Dなら300G+α。
- 「必ず700Gに短縮」と断定せず、モード再抽選優遇として扱う。

### modeAfterReset
- 設定変更時にモード再抽選。
- 複数解析資料でモードBへ移行しやすい / モードB以上に期待できる旨を確認。
- 設定変更専用のA/B/C/D全振り分け数値は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- モード別CZ天井: A 1000G+α / B 700G+α / C 500G+α / D 300G+α。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き / 純電断: CARRY_OVER。

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き / 純電断: CARRY_OVER。
- スマスロのため有利区間ゲーム数上限は撤廃されている。
- 稼働中の有利区間リセットタイミングは上位AT継続中の一部等が解析されているが、本DBの朝一比較目的では詳細抽選を収集しない。

### resetBenefits
- 設定変更後はモードBへ移行しやすく、通常より早いCZ当選に期待できる。
- 設定変更直後1G目は非有利区間から有利区間へ移行するゲームで、レア役成立時にAT直撃抽選。
- 共闘レア役成立時はAT直撃濃厚級とする解析あり。

### resetPenalties
- 前日のCZ間ゲーム数、ボーナス&AT間実ゲーム数、モード、内部状態、各種スルー進行を失う。
- 設定変更専用の追加不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 据え置きでも長時間電源OFF後は液晶ゲーム数表示がリセットされるため、朝一表示0Gだけでは変更判別不可。
- 据え置きでは内部ゲーム数を引き継ぐため、前日ゲーム数と当日のCZ当選ゲーム数を合算してモード天井挙動と照合することが補助判別材料になる。
- 本機固有のリールガックン条件・発生率は `革命機ヴァルヴレイヴ / L革命機ヴァルヴレイヴD / SANKYO / スマスロ / 設定変更 / リセット / 朝一 / 据え置き / ガックン / リール` を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- モード別CZ天井: A 1000G+α / B 700G+α / C 500G+α / D 300G+α。
- ボーナス&AT間天井: 実ゲーム数1500G+α。
- 朝一1G目: レア役成立時AT直撃抽選。共闘レア役成立時はAT直撃濃厚級の解析。
- 設定変更時モードB選択率の具体値: `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更後の固定短縮天井値: NONE_CONFIRMED。
- モードB選択時CZ天井: 700G+α（液晶G数）。
- モードC: 500G+α、モードD: 300G+α。
- 設定変更後1G目のレア役はAT直撃抽選対象。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ 革命機ヴァルヴレイヴ / L革命機ヴァルヴレイヴ / L革命機ヴァルヴレイヴD / ヴヴヴ / SANKYO` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井短縮 / モード / モードB / ガックン / 有利区間 / 判別` を組み替えて再探索。
- SANKYOオンライン博物館、遊技日本、グリーンべると、HAZUSE、一撃、パチマガスロマガ、ちょんぼりすた、P-WORLD、なな徹、必勝本系等を横断。
- 型式名・検定番号はHAZUSEで `L革命機ヴァルヴレイヴD / 2S0869` を確認し、型式名は遊技日本でも照合。
- 設定変更時のモードB優遇は複数解析系で一致したが、公開された設定変更専用モード振り分け表は確認できなかったため数値化していない。

## conflicts
- 導入日は実導入系資料（グリーンべると、DMM、HAZUSE等）で2022-11-21。一方、2022-10-13の遊技日本発表記事は11月20日導入予定と記載。予定日と実導入日を平均せず、canonicalを2022-11-21、alternateを2022-11-20予定として保持。
- 一部二次資料で設定1初当たり1/519を「ボーナス」と表記し、遊技日本/K-Navi等では「AT初当たり」と表記する。公開スペックの同一列に対するラベル差の可能性があるため、数値自体は保持しつつ本レコードでは「初当たり」として定義を中立化。実機完全再現用の内部内訳は収集しない。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用のA/B/C/Dモード振り分け数値: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-13

1. SANKYOオンライン博物館 — パチスロ 革命機ヴァルヴレイヴ
   https://www.sankyo-fever.jp/collection/936/
2. 遊技日本 — 出玉革命！パチスロ新台「パチスロ 革命機ヴァルヴレイヴ」
   https://news.p-world.co.jp/articles/21909/nippon
3. グリーンべると — 11/21新台 SANKYOのスマスロ第1弾
   https://news.p-world.co.jp/articles/22261/greenbelt
4. HAZUSE — 基本情報 / 型式 / 検定番号
   https://hazuse.com/machine/pachislot/2S0869/
5. HAZUSE — 天井・設定変更
   https://hazuse.com/machine/pachislot/2S0869/genre/207/
6. 一撃 — 天井 / 設定変更 / 朝一
   https://1geki.jp/slot/s_valvrave/3/
7. パチマガスロマガ — 朝イチ・設定変更
   https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/57/kr01.php
8. ちょんぼりすた — スペック / 朝一 / モード
   https://chonborista.com/slot/sankyo-slot/174976/
9. なな徹 — モードの特徴・規定G数
   https://nana-press.com/kaiseki/machine/463/25462/
10. DMMぱちタウン — 機種基本情報
    https://p-town.dmm.com/machines/4244/shops
11. パチ＆スロ必勝本 — 通常時モード
    https://p.hisshobon.jp/vpage/2496/4
12. P-WORLD — 機種DB
    https://www.p-world.co.jp/machine/database/9725

coreStatus: COMPLETE_CORE
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V07
