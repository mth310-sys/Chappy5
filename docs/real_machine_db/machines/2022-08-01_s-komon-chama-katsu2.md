# S黄門ちゃま喝2

recordNo: 1509
machineName: S黄門ちゃま喝2
manufacturer: オリンピア / 平和
formalModel: S黄門ちゃま喝2L1
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2022-08-01
generation: 6.5号機
systemType: AT / ゲーム数管理型

## payoutRateBySetting

- 設定1: 97.5%
- 設定2: 98.5%
- 設定3: 101.2%
- 設定4: 104.9%
- 設定5: 107.3%
- 設定6: 108.1%

遊技日本、必勝本、1geki等で一致。

信頼度: HIGH

## initialHitBySetting

### AT初当り
- 設定1: 1/239.6
- 設定2: 1/234.2
- 設定3: 1/218.2
- 設定4: 1/199.4
- 設定5: 1/197.2
- 設定6: 1/195.7

信頼度: HIGH

## baseGamesPer50

- 約34G/50枚

信頼度: HIGH

## netIncrease

- AT「水戸YELLOW GATE」: 約+2.5枚/G
- 初期ゲーム数30G+α、ゲーム数上乗せ型

信頼度: HIGH

## basicPayout

- AT初当り時は「印籠チャンス」から開始し、AT初期ゲーム数を決定。
- AT「水戸YELLOW GATE」初期ゲーム数: 30G+α。
- 固定枚数型ではなく、ゲーム数上乗せ型ATとして記録。

信頼度: HIGH

## modeSpecificMinimumData

- 6.5号機AT機。有利区間ゲーム数上限4,000G世代。
- 通常時は「御一行箱」「印籠箱」の310WカウンターでCZ/ATを抽選。
- CZ「御一行チャレンジ」は10G完走型、成功期待度約37%。上位CZ「もっとラブラブお銀ハネムーン」は21G、成功期待度約67%。
- 通常モード天井は500G以降に印籠箱MAX到達で印籠チャンス=AT当選。
- AT終了後の約15%で引き戻しゾーン「萌えろ!9回裏2死満塁チャンス」に突入。
- 有利区間ランプは非搭載。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_DIRECT_RESET_NUMBERS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior

- 設定変更時は専用の朝一/設定変更モードへ移行。
- 天井ゲーム数はRESETし、通常500G基準から350G基準へ短縮。
- 内部状態はRESET扱いとする機種別朝一資料を確認。
- 見た目の310pt表示は0ptから始まるが、設定変更時は内部的なポイント加算が行われるため、表示だけで変更判別はできない。

### carryOverBehavior

- 据え置き時は前日の内部ポイントを引き継ぐ。
- 天井/内部状態の据え置き個別表について、純電断と同一契約を示す資料と、ポイント引継ぎ記述を確認。
- 据え置き時に見た目上のポイント表示が0ptでも内部ポイントは引き継がれるため、突然310pt MAX演出が発生する場合がある。

### powerCycleBehavior

- 電源OFF→ONのみ: 天井を引き継ぐ。
- 内部状態も引き継ぐとする機種別朝一表を確認。
- ステージ表示については当時資料で「調査中」が残るため `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 設定変更時: RESET。
- 純電源OFF→ON時: CARRY_OVER。
- 据え置き時: 内部ポイントを含めCARRY_OVER。

### ceilingAfterReset

- 通常モード: 500G以降に印籠箱MAXでAT。
- 設定変更時: 350G以降に印籠箱MAXでAT。
- 350G到達だけで即ATではなく、350G以降は天井状態となり、印籠箱MAX到達時にAT当選する仕様。

### modeAfterReset

- 通常/チャンス/朝一（設定変更）の3モードを確認。
- 設定変更時は朝一専用モードへ移行。
- チャンスモードはゲーム数不問で印籠箱MAX時AT当選。
- 有利区間が設定変更以外の契機でリセットされた場合はチャンスモード移行濃厚/確定とする複数解析を確認。

### stateAfterReset

- 設定変更時: 内部状態RESET。
- 純電源OFF→ON: 内部状態CARRY_OVER。
- 設定変更直後の通常/高確等の詳細状態振り分けは、物差し用途で必要な比較可能数値を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- 設定変更時は新しい有利区間として扱われ、設定変更専用モード/短縮天井へ移行。
- 有利区間ランプ非搭載のため、ランプでの設定変更判別不可。
- AT終了後は有利区間が切れないケースの方が多く、一部で有利区間リセット。その場合はチャンスモード移行が強い。

### resetBenefits

- 設定変更後は通常500G基準から350G基準へ天井短縮。
- 朝一設定変更時は印籠箱MAX（W MAX含む）時のAT当選率が全設定共通55.1%。
- 朝一10G付近は喝ゾーン突入期待度が高く、解析上約40%クラスのゾーンとして扱われる資料を確認。

### resetPenalties

- 設定変更固有の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 有利区間ランプ非搭載のためランプ判別不可。
- 朝一10G付近で喝ゾーンへ突入すれば設定変更期待度が上がる。
- 据え置きでは前日ポイントを内部的に引き継ぐが、見た目は0pt表示となるため、ポイント表示だけでの確定判別は不可。
- 本機固有のリールガックンによる確定判別は、機種名・型式・メーカー・シリーズ名と「ガックン」「設定変更」「据え置き」を組み替えて再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時天井基準: 350G（通常500G）。
- 設定変更時、印籠箱MAX時AT当選率: 全設定共通55.1%。
- 朝一/設定変更モードの10G喝ゾーン突入期待度: 約40%とする解析資料あり。
- 350G以降は印籠箱MAXでAT確定。

### publicMorningNumbers

- 350G短縮天井基準。
- 印籠箱MAX時AT当選率55.1%（全設定共通）。
- 10G付近喝ゾーン突入期待度約40%（解析資料）。

### resetBehavior 再探索メモ

- 検索語: `S黄門ちゃま喝2 / パチスロ黄門ちゃま喝2 / S黄門ちゃま喝2L1 / オリンピア / 平和 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / モード / ガックン / 有利区間 / 310pt`。
- 業界記事、P-WORLD、1geki、必勝本、当時の攻略系、2022年新台カレンダーを横断。
- 350G短縮、電源OFF→ONで天井引継ぎ、朝一専用モード、55.1%、有利区間ランプ非搭載は複数系統で照合。
- 正式型式 `S黄門ちゃま喝2L1` は業界一次記事・公安委員会検定通過記事で確認。
- HAZUSE型式DB相当の `2Sxxxx` 検定番号は、表記揺れ/型式名/公安委員会/保通協/検定番号で再探索したが今回固定できず推測しない。

## sources

取得日: 2026-09-13

1. 遊技日本 / P-WORLD業界ニュース — S黄門ちゃま喝2製品発表
   - https://news.p-world.co.jp/articles/20733/nippon
   - 型式S黄門ちゃま喝2L1、6.5号機AT、純増2.5枚/G、AT初当り・出玉率、8月1日導入予定
   - reliability: INDUSTRY_HIGH
2. Greenbelt / P-WORLD — 2022-08-01新台スケジュール
   - https://news.p-world.co.jp/articles/21319/greenbelt
   - 8月1日パチスロ導入群: 黄門ちゃま喝 / FAIRY TAIL2
   - reliability: INDUSTRY_HIGH
3. Greenbelt — 検定通過型式
   - https://web-greenbelt.jp/post-60731/
   - 高知県公安委員会、S黄門ちゃま喝2L1検定通過
   - reliability: INDUSTRY_HIGH
4. P-WORLD — S黄門ちゃま喝2
   - https://www.p-world.co.jp/machine/database/9660
   - 6.5号機AT、初期30G+α、2.5枚/G、通常500G/設定変更後350G、CZ概要、有利区間4,000G世代
   - reliability: ANALYSIS_HIGH
5. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/3931/1/89345
   - 設定別AT初当り・機械割、導入日、純増
   - reliability: ANALYSIS_HIGH
6. 1geki — S黄門ちゃま喝2
   - https://1geki.jp/slot/s_komonkatsu2/
   - 設定別AT初当り・機械割、導入日、純増
   - reliability: ANALYSIS_HIGH
7. 1geki — 通常時モード
   - https://1geki.jp/slot/s_komonkatsu2/45/
   - 通常/チャンス/朝一モード、通常500G・朝一350G、チャンスモード仕様
   - reliability: ANALYSIS_HIGH
8. スロットセブン — 天井・朝一
   - https://slot-seven.com/skm7-tenzyou/
   - 設定変更350G、電源OFF→ON天井/内部状態引継ぎ、55.1%、10G喝ゾーン、ポイント引継ぎ、ランプ非搭載
   - reliability: ANALYSIS_SINGLE_WITH_CROSSCHECK
9. 2-9伝説 — 天井解析
   - https://2-9densetsu.com/chama2/
   - 通常500G、設定変更350G、設定変更で天井G数リセット
   - reliability: ANALYSIS_HIGH
10. イチカツ — 黄門ちゃま喝2
   - https://ichikatsu.com/chamakatsu2/
   - 34G/50枚、設定別初当り・機械割、設定変更350G、電源ON/OFF引継ぎ、判別材料
   - reliability: ANALYSIS_HIGH
11. スロット新台一覧2022
   - https://ichikatsu.com/newslot2022/
   - 8月1日導入、同日FAIRY TAIL2
   - reliability: ANALYSIS_SINGLE

## missingFields

- `2Sxxxx`形式の検定番号
- 設定変更直後の内部状態詳細振り分け
- 本機固有リールガックンの直接契約
- 純電断後のステージ表示契約

## conflicts

- 導入日に一部資料で2022-08-08併記があるが、業界一次記事・複数新台カレンダー・必勝本で2022-08-01が全国導入基準として一致。地域差による導入日差として扱い、性能CONFLICTにはしない。
- 「有利区間リセット時」の呼称は、設定変更時の朝一モードとAT後一部リセット時のチャンスモードを区別して保存。両者を同一モードとして平均化しない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_WITH_DIRECT_RESET_NUMBERS
confidence: HIGH_CORE / HIGH_RESET
