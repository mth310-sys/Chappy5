# ぴかっとシーサー

machineName: ぴかっとシーサー
manufacturer: デンケン販売（CONFLICT_NOTE: 後年業界史整理にデージー表記あり）
formalType: UNVERIFIED
generation: 5号機
releaseDate: 2007-12（CONFLICT_NOTE: 小冊子収集資料に2007-11表記あり）
systemType: ノーマル / 完全告知 / 同時成立あり / 高技術介入
coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetBehaviorQA: PARTIAL

## release / identity

- 2007-07-10付の当時業界記事転載では、電遊協5社合同展示会において **デンケン販売「ぴかっとシーサー」** が展示され、「秋ごろ発売予定」とされている。
- 5号機クロニクルのデンケン販売一覧、パチンコFAN 2007年度一覧、スロリスクタイムはいずれも **2007-12** 導入としている。
- 一方、当時機種小冊子の収集リストには **2007-11** 設置表記が残るため、月差は平均せず `CONFLICT_RELEASE_MONTH` として保持する。
- 後年の「パチスロ業界初まとめ」更新履歴には、当初パチンコビレッジ記事がデンケン販売としたのに対し、後の娯楽産業協会ニュースではデージー表記だったとの注記がある。現存する当時展示会記事・パチマガスロマガ・複数DBはデンケン販売で一致するため主表記はデンケン販売とするが、メーカー帰属差は消さず `CONFLICT_MANUFACTURER_ATTRIBUTION` として残す。
- 具体的な納品開始日 / 全国ホール導入日は、`ぴかっとシーサー / デンケン販売 / デージー / 発売 / 導入 / 納品 / 2007年11月 / 2007年12月` を組み替え、当時業界記事・解析・後年DBを横断したが確定できず `UNVERIFIED_AFTER_RESEARCH`。

信頼度: INDUSTRY / ANALYSIS_HIGH / CONFLICT

## payoutRateBySetting

パチマガスロマガ（完全手順時シミュレート）:

| 設定 | 機械割 |
|---|---:|
| 1 | 101.49% |
| 2 | 103.15% |
| 3 | 105.53% |
| 4 | 107.92% |
| 5 | 109.73% |
| 6 | 111.96% |

パチマガスロマガ（チェリー狙い適当打ち時シミュレート）:

| 設定 | 機械割 |
|---|---:|
| 1 | 98.78% |
| 2 | 100.28% |
| 3 | 102.65% |
| 4 | 104.91% |
| 5 | 106.61% |
| 6 | 108.73% |

5号機クロニクル:

| 設定 | 機械割 |
|---|---:|
| 1 | 101.4% |
| 2 | 103.1% |
| 3 | 105.4% |
| 4 | 107.6% |
| 5 | 109.4% |
| 6 | 111.4% |

- 本機は小役取得手順による差が極めて大きいため、完全手順値と簡易手順値を別定義で保持する。
- 5号機クロニクル値は完全手順系列に近いが、設定3〜6は単純丸めだけではない差があるため平均化せず `CONFLICT_ROUNDING_OR_SIMULATION_DEFINITION`。

信頼度: ANALYSIS_HIGH / CONFLICT_DETAIL

## initialHitBySetting

パチマガスロマガ:

| 設定 | BIG | REG | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/409.60 | 1/1170.29 | 1/303.41 |
| 2 | 1/409.60 | 1/819.20 | 1/273.07 |
| 3 | 1/364.09 | 1/1092.27 | 1/273.07 |
| 4 | 1/364.09 | 1/655.36 | 1/234.06 |
| 5 | 1/327.68 | 1/1092.27 | 1/252.06 |
| 6 | 1/327.68 | 1/655.36 | 1/218.45 |

- 同時成立比率等の完全再現用詳細は物差し必須外なので収録しない。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガの1000円あたりゲーム数:

### 完全手順時

| 設定 | 50枚あたりG数 |
|---|---:|
| 1 | 63.12G |
| 2 | 64.08G |
| 3 | 64.86G |
| 4 | 65.65G |
| 5 | 67.71G |
| 6 | 68.14G |

### チェリー狙い適当打ち時

| 設定 | 50枚あたりG数 |
|---|---:|
| 1 | 51.85G |
| 2 | 52.05G |
| 3 | 52.19G |
| 4 | 52.38G |
| 5 | 52.69G |
| 6 | 52.82G |

- 小役重複構成のため、ビタ押しを含む完全手順でコイン持ちが大幅に向上する特殊な技術介入機。
- 物差しでは通常手順と完全攻略手順を混ぜず別系列として扱う。

信頼度: ANALYSIS_HIGH

## netIncrease

- RT / ART / ATは搭載しないノーマルタイプ。
- `NOT_APPLICABLE`。

## basicPayout

パチマガスロマガ:

- BIG: 345枚超払い出しで終了、純増 **約312枚**。
- REG: 105枚超払い出しで終了、純増 **約104枚**。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- ノーマル / 完全告知 / 同時成立あり。
- リール右上の告知ランプによる完全告知。
- RT等の付加機能なし。
- 通常時の完全手順ではBAR上段ビタ押しを基点に、重複する小役を高払い出し側で取得することでベースと機械割が大きく向上する。
- 有利区間は制度導入前で非該当。

## resetBehavior

### settingChangeBehavior

- 本機固有の設定変更時内部処理を直接記載した高信頼資料は確認できなかった。
- RT/ART、ゲーム数管理AT、モード天井を持たないノーマル機であり、パチマガスロマガの攻略トップにも **「攻め時・ヤメ時→特にナシ」** と掲載。
- 設定変更時のボーナス成立状態、乱数/RAM処理、初期出目等の内部詳細は `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 据え置き時に引き継ぐべきゲーム数天井・モード・RT/ART残Gは本機仕様上 `NOT_APPLICABLE / NONE_CONFIRMED`。
- 本機固有のボーナス成立状態等の電断跨ぎ処理は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 電源OFF→ONのみの場合の、本機固有のボーナス成立状態・初期出目・告知状態の扱いを明記する直接資料は確認できなかった。
- `電源OFF ON / 電断 / 再起動 / 据え置き / 朝一` を変えて再探索済み。

status: `UNVERIFIED_AFTER_RESEARCH`

### gameCounterReset

- 通常時ゲーム数による天井 / 周期CZ / AT当選管理は `NONE_CONFIRMED`。
- リセット時に客行動へ影響する公開ゲーム数カウンタは確認できない。

### ceilingAfterReset

- 通常天井・設定変更後短縮天井・朝一専用天井はいずれも `NONE_CONFIRMED`。

### modeAfterReset

- 通常時モード管理、設定変更時モード再抽選、朝一専用モード、公開振り分けは `NONE_CONFIRMED`。

### stateAfterReset

- RT/ART/AT/CZ状態は搭載しないため `NOT_APPLICABLE`。
- ボーナス成立状態等の内部RAMレベルの変更/電断処理は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE`（有利区間制度導入前）。

### resetBenefits

- 設定変更時のみ発生する短縮天井、朝一RT、専用モード、初当たり優遇等は `NONE_CONFIRMED`。

### resetPenalties

- 設定変更時固有の公開不利要素は `NONE_CONFIRMED`。

### resetDetection

- `設定変更 / リセット / 朝一 / 据え置き / ガックン / 初期出目 / 告知ランプ` を機種名・メーカー名と組み替えて再探索したが、本機固有の変更判別要素を直接確認できなかった。
- `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時専用のモード振り分け、朝一当選率、短縮天井G数、恩恵発生率などの公開数値は `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. Pマンズ / 当時業界記事転載 — 電遊協5社が5号機合同展示会
   - https://p-mans.blogspot.com/2007/07/
   - 2007-07-10更新。デンケン販売「ぴかっとシーサー」、秋ごろ発売予定。
   - reliability: INDUSTRY_ARCHIVE
2. パチマガスロマガ — ぴかっとシーサー 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/denken_slot/01/a.php
   - ノーマル/同時成立/完全告知、RTなし、BIG約312枚、REG約104枚。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/denken_slot/01/h.php
   - 設定別BIG/REG/合成、完全手順/簡易手順の機械割。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 小役確率・1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/denken_slot/01/c.php
   - 完全手順63.12〜68.14G、チェリー狙い適当打ち51.85〜52.82G。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/denken_slot/01/denken_slot_01.php
   - 「攻め時・ヤメ時→特にナシ」。
   - reliability: ANALYSIS_HIGH
6. 5号機クロニクル — デンケン販売5号機一覧
   - https://5goki.com/denkenhanbai
   - 導入2007/12、機械割101.4〜111.4%。
   - reliability: SECONDARY_DB
7. パチンコFAN — 2007年度機種一覧
   - https://pacnk.com/photoslot/plist2007_0_0.html
   - 2007年12月欄にぴかっとシーサー（デンケン販売）。
   - reliability: SECONDARY_DB
8. スロリスクタイム — ノーマルタイプ一覧
   - https://pachisuro100.com/normal/
   - ぴかっとシーサー / デンケン販売 / 2007/12を照合。
   - reliability: SECONDARY_DB
9. オイラは山佐が大好きだ！！ — 小冊子リスト5
   - https://plaza.rakuten.co.jp/sukisukiyamasa/20006/
   - ぴかっとシーサーを2007/11設置と記録。導入月CONFLICT根拠。
   - reliability: COLLECTION_ARCHIVE_SINGLE
10. パチスロ業界初まとめ — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - デンケン販売表記と、後の娯楽産業協会ニュースのデージー表記差を記録。
   - reliability: HISTORICAL_SECONDARY

## missingFields

- 具体的な納品開始日 / 全国ホール導入日
- 正式型式名
- 本機固有の設定変更時RAM処理
- 電源OFF→ONのみの内部状態 / ボーナス成立状態の扱い
- 本機固有のガックン / 初期出目 / ランプ等の変更判別

## conflicts

- `CONFLICT_RELEASE_MONTH`: 5号機クロニクル・パチンコFAN・スロリスクタイムは2007-12、小冊子収集資料は2007-11。
- `CONFLICT_MANUFACTURER_ATTRIBUTION`: 当時展示会記事・パチマガスロマガ・複数DBはデンケン販売。後年業界史整理では、後の娯楽産業協会ニュースにデージー表記があったと記録。
- `CONFLICT_PAYOUT_RATE_DETAIL`: 完全手順機械割はパチマガスロマガ101.49〜111.96%、5号機クロニクル101.4〜111.4%。平均せず双方保持。
