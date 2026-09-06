# 緑ドンVIVA2

machineName: 緑ドンVIVA2
formalModelName: 緑ドンVIVA2MR
manufacturer: エレコ
releaseDate: 2014-04-21
releaseDatePrecision: exact_hall_start
generation: 5号機
systemType: 疑似ボーナス + ART / CZ / ゲーム数上乗せ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL

## identity

- ユニバーサルエンターテインメント公式でエレコ製、5号機ART、発売2014年4月を確認。
- K-Naviおよびパチセブンでホール導入開始 **2014-04-21** を確認。
- 後年の実機流通資料で型式表記 **緑ドンVIVA2MR** を確認。型式名はメーカー公式一次資料未取得のため RETAIL_HARDWARE_REFERENCE とする。
- confidence: OFFICIAL + ANALYSIS_HIGH_EXACT_DATE / formalModelName: RETAIL_HARDWARE_REFERENCE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.7% |
| 3 | 101.7% |
| 4 | 106.4% |
| 5 | 111.6% |
| 6 | 119.3% |

- 当時解析、後年機種DB、CrankySevenで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 疑似ボーナス合算

| 設定 | ボーナス合算 |
|---:|---:|
| 1 | 1/265.0 |
| 2 | 1/262.9 |
| 3 | 1/250.0 |
| 4 | 1/241.8 |
| 5 | 1/231.5 |
| 6 | 1/220.8 |

### ART「アマゾンゲーム」初当たり

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/617.5 |
| 2 | 1/599.0 |
| 3 | 1/566.1 |
| 4 | 1/506.1 |
| 5 | 1/476.0 |
| 6 | 1/404.7 |

- 当時解析の設定別テーブルを採用。
- P-WORLD掲載の「ボーナス・AT合算 1/185.4〜1/142.9」は、疑似ボーナス単独合算とは定義が異なる総合初当たりなので混同しない。
- confidence: ANALYSIS_PERIOD_HIGH

## baseGamesPer50

- **約30.0G / 1000円（50枚相当）**。
- パチマガスロマガの小役解析ページに「1000円あたりのゲーム数 約30.0G」と明記。
- 近年再整理DBで未確認扱いの例があるが、現存する旧パチマガスロマガ直接ページを優先する。
- confidence: ANALYSIS_HIGH_PERIOD_ARCHIVE

## netIncrease

- 疑似ボーナス / ART: **約2.4枚/G**。
- ユニバーサル公式、グリーンべると当時業界記事、K-Navi、P-WORLD、パチマガスロマガで一致。
- confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BB: **60G / 約150枚**。
- 葉月ボーナス: **平均20G / 約50枚**。
- XBB: **約150枚+α**。X-RUSHストックゾーン後にBBへ移行。
- ART「アマゾンゲーム」: **1セット50G+α**。初当たり時は必ずX-RUSHを経由し、50Gに上乗せ分を加えて開始。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE + INDUSTRY

## modeSpecificMinimumData

- 通常時のボーナス抽選状態には通常 / 高確A / 高確B等が存在。
- CZ「ビリゲゾーン」は、ボーナス間G数と **15種類のテーブル** によりCZ抽選状態を管理。
- ART直撃の主ルートはCZ・疑似ボーナス経由。詳細な小役別抽選や全テーブル内部挙動は完全再現用なので収集対象外。

## ceiling

- 第一天井: **疑似ボーナス間900G** → 前兆を経由してCZ「ビリゲゾーン」確定。
- 第二天井: **疑似ボーナス間1280G** → 前兆を経由してXBB確定。
- ART初当たりではボーナス間天井Gはリセットされず、ARTを挟んでも第二天井を目指せる。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_DIRECT_SETTING_CHANGE_CONTRACT_AND_PUBLIC_MORNING_TABLE_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **設定変更時は天井までのゲーム数をリセット**。
- **内部状態を再抽選**。
- **ビリゲゾーン抽選テーブルを再抽選**。
- 液晶は **必ずドンちゃんステージ** から開始。
- confidence: ANALYSIS_PERIOD_DIRECT

### carryOverBehavior

- 純据え置き時のボーナス間900G/1280G天井G数、内部状態、CZテーブルについて、本機固有の「据え置きなら引継ぎ」とする直接契約を検索語・資料系統変更後も安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時リセットという事実から据え置き保持を自動推定しない。

### powerCycleBehavior

- 設定変更なしの電源OFF→ONでも、液晶は **ドンちゃんステージ** から開始する直接記述あり。
- 電源OFF→ONのみの場合のボーナス間天井G数、内部状態、CZテーブルの保持/再抽選は、直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- stage: DONCHAN_STAGE_CONFIRMED / internalCounters: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**（疑似ボーナス間900G/1280G天井）。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更後も通常の **900G / 1280G** 天井構造を使用し、設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセットによる天井G数クリアは「短縮」とは扱わない。

### modeAfterReset

- CZ「ビリゲゾーン」抽選テーブルは **設定変更時に再抽選**。
- 設定変更後のテーブル選択は全設定共通の公開数値あり（numericResetData参照）。
- 通常A/B等の解除モードとは異なるため、CZ抽選テーブルとして定義を分ける。
- confidence: ANALYSIS_PERIOD_DIRECT

### stateAfterReset

- **内部状態再抽選 CONFIRMED**。
- ボーナス抽選状態の具体的な設定変更時振り分け（通常/高確A/Bなど）は十分な再探索後も比較可能な完全表を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_PERIOD_DIRECT for re-lottery contract

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- CZ抽選テーブル・内部状態が再抽選されるため朝一に状態上振れの余地はある。
- ただし当時102件の朝一実践値では、設定変更後に目立って初当たり率が高くなる傾向は確認されず、資料も「積極的なリセット狙い」を否定的に評価。
- 設定変更専用短縮天井や確定CZ等の強い固定恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 天井G数がクリアされるため、前日ハマリ台では設定変更により宵越し天井進捗を失う点が客側の主要不利。
- その他の設定変更専用ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 設定変更時も電源OFF→ONのみでも液晶がドンちゃんステージから始まるため、**朝一初期ステージ単独では変更判別不可**。
- 朝一にレア役を引かずハナビムラステージへ移行した場合は **設定変更濃厚**とする当時解析あり。
- CZ高確移行候補G数（1〜100 / 181〜210 / 281〜310 / 481〜510 / 581〜610 / 681〜710 / 900G）と高確示唆挙動を前日G数と照合する変更推測も可能とされる。ただし前日G数次第では判別不能。
- 本機固有ガックンの高信頼契約は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_PERIOD for behavioral detection

### numericResetData

#### 設定変更後 CZ「ビリゲゾーン」抽選テーブル振り分け（全設定共通）

| テーブル | 振り分け |
|---:|---:|
| 1 | 29.20% |
| 2 | 24.72% |
| 3 | 2.75% |
| 4 | 9.16% |
| 5 | 8.24% |
| 6 | 0.92% |
| 7 | 9.16% |
| 8 | 8.24% |
| 9 | 0.92% |
| 10 | 3.05% |
| 11 | 2.75% |
| 12 | 0.31% |
| 13 | 0.31% |
| 14 | 0.27% |
| 15 | 0.03% |

- confidence: ANALYSIS_PERIOD_DIRECT

### publicMorningNumbers

- 上記15テーブルの設定変更後振り分けを **PUBLIC_MORNING_NUMERIC_TABLE_CONFIRMED** として保持。
- 当時記事の新台初日・朝一1回目初当たり **102件**の実践値グラフは存在するが、画像値をOCR等で推測復元せず、数値表としては採用しない。

## resetBehavior 再探索メモ

「緑ドンVIVA2 / 緑ドン VIVA2 / 緑ドンVIVA2MR / エレコ」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電源オンオフ / 天井 / 900G / 1280G / ビリゲゾーン / テーブル / 内部状態 / 高確 / ガックン / 変更判別」を組み合わせ、ユニバーサル公式、K-Navi、P-WORLD、旧パチマガスロマガ、CrankySeven、2014年当時攻略記事、後年DBを横断。設定変更時の天井Gクリア・内部状態再抽選・テーブル再抽選・朝一15テーブル振り分け・ドンちゃんステージ、および電源OFF→ON時の液晶ドンちゃんステージまでは直接固定できた。純据え置き/電断時の内部カウンタ・状態・テーブル保持契約とガックンは十分な再探索後も直接固定できないため推測しない。

## conflicts / safeguards

- P-WORLDの「ボーナス・AT合算 1/185.4〜1/142.9」と、ボーナス単独合算 1/265.0〜1/220.8、ART初当たり 1/617.5〜1/404.7 は定義が異なるため平均しない。
- 「ボーナス間天井」とARTデータカウンター表示を混同しない。ARTを挟んでもボーナス間900G/1280Gの内部天井は継続する。
- 2025年スマスロ「L緑ドン VIVA!情熱南米編 REVIVAL」の有利区間/リセット仕様を2014年VIVA2へ混入しない。
- 前作「緑ドン VIVA!情熱南米編」のリセット契約を流用しない。

## sources

取得日: **2026-09-06**

1. ユニバーサルエンターテインメント公式「緑ドンVIVA2」
   - https://www.universal-777.com/product/slot/midoridon_viva2/
   - エレコ、5号機、ART、2014年4月発売、CZ/X-RUSH/ロケットモード。
   - reliability: OFFICIAL
2. K-Navi「緑ドンVIVA2」
   - https://p-kn.com/slot/2023/
   - 2014-04-21ホール導入開始、疑似ボーナス+ART、純増約2.4枚/G。
   - reliability: ANALYSIS_HIGH_DATABASE
3. グリーンべると「『魂が震える出来』緑ドンVIVA2発表」2014-02-25
   - https://web-greenbelt.jp/00000044/
   - エレコブランド、純増2.4枚、疑似ボーナス搭載ART。
   - reliability: INDUSTRY_PERIOD
4. P-WORLD「緑ドンVIVA2」
   - https://www.p-world.co.jp/machine/database/7340
   - 5号機ART、純増約2.4枚/G、1セット50G+初回X-RUSH上乗せ。
   - reliability: INDUSTRY_DATABASE
5. パチマガスロマガ「緑ドンVIVA2」機種概要
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/94/a.php
   - 疑似ボーナス/ART、約2.4枚/G、BB約150枚、葉月約50枚、ART50G+α。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ「小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/94/c-2.php
   - 1000円あたり約30.0G。
   - reliability: ANALYSIS_HIGH_PERIOD_ARCHIVE
7. 期待値見える化「緑ドンVIVA2 天井・テーブル解析」2014-04-24
   - https://slotjin.com/zone/midoridon-viva2/
   - 設定別ボーナス/ART初当たり、機械割、900G/1280G天井、設定変更で天井Gリセット、CZテーブル構造。
   - reliability: ANALYSIS_PERIOD
8. 期待値見える化「緑ドンVIVA2 朝一設定変更(リセット)後の挙動・恩恵・実践値」2014-04-27
   - https://slotjin.com/slot/midoridon-viva2-morning/
   - 設定変更時の天井Gリセット、内部状態/テーブル再抽選、ドンちゃんステージ、電源OFF/ON後も同ステージ、設定変更後15テーブル振り分け、朝一判別挙動。
   - reliability: ANALYSIS_PERIOD_DIRECT
9. CrankySeven「緑ドンVIVA2」
   - https://crankyseven.com/midoridon-viva-two-pc.htm
   - 機械割、天井、設定変更で天井Gクリア。
   - reliability: ANALYSIS_DATABASE
10. パチセブン「緑ドンVIVA2 天井」
   - https://pachiseven.jp/machines/4127/cutout/78
   - 2014-04-21、900G CZ天井、1280G XBB天井、ARTを挟んでもボーナス間天井継続。
   - reliability: ANALYSIS_HIGH
11. 実機流通参考（型式名）
   - https://jmty.jp/chiba/sale-toy/article-1ld70m
   - 緑ドンVIVA2MR表記。
   - reliability: RETAIL_HARDWARE_REFERENCE
