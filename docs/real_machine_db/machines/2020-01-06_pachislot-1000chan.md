# パチスロ1000ちゃん

recordNo: 1327
machineName: パチスロ1000ちゃん
machineNameVariants: 1000ちゃん / せんちゃん / Sパチスロ1000ちゃんPX
manufacturer: オーイズミ
formalModel: Sパチスロ1000ちゃんPX
certificationNumber: 9S1223
releaseDate: 2020-01-06
releaseDateNote: HAZUSE、1geki、パチ7、ちょんぼりすた、すろぬー等で2020-01-06導入が一致。
generation: 6号機
systemType: A+AT / リアルボーナス+AT / CZ経由型 / 技術介入要素あり

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.5% |
| 2 | 98.5% |
| 3 | 100.7% |
| 4 | 103.5% |
| 5 | 106.0% |
| 6 | 110.0% |

HAZUSE、1geki、パチ7、ちょんぼりすた、すろぬーで一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス / CZ / AT初当たり

| 設定 | ボーナス合算 | CZ | AT初当たり |
|---|---:|---:|---:|
| 1 | 1/188 | 1/489 | 1/446 |
| 2 | 1/183 | 1/461 | 1/432 |
| 3 | 1/174 | 1/429 | 1/409 |
| 4 | 1/161 | 1/409 | 1/388 |
| 5 | 1/149 | 1/376 | 1/361 |
| 6 | 1/137 | 1/342 | 1/334 |

### BIG / REG

| 設定 | BIG合算 | REG |
|---|---:|---:|
| 1 | 1/320 | 1/455 |
| 2 | 1/312 | 1/443 |
| 3 | 1/298 | 1/420 |
| 4 | 1/280 | 1/379 |
| 5 | 1/263 | 1/343 |
| 6 | 1/242 | 1/317 |

HAZUSE、1geki、パチ7、ちょんぼりすた、すろぬーで主要値を照合。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約37.5G/50枚**。
- ちょんぼりすた、すろぬー等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- メインAT「1000★CHANCE」等: **約2.0枚/G**。
- オーイズミ公式ティザーPV、当時業界発表、HAZUSE、1geki、パチビー等で一致。

信頼度: OFFICIAL + INDUSTRY + ANALYSIS_HIGH

## basicPayout

- BIG BONUS: **平均約150枚 / 最大180枚**。
- LIVE BONUS（REG）: **平均約60枚**。
- メインAT「1000★CHANCE」: **1セット30G+α、純増約2.0枚/G**。
- ATセット終了後はCZへ移行し、当時解析では約60%でループ期待。
- 上位AT「1000★PARTY」はST型、PREMIUM 1000★CHANCEは1000枚獲得まで継続する差枚数管理型として公開されているが、物差し用途では基本AT性能を主値とする。

信頼度: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 天井は有利区間移行後、BIG/AT非当選で **333G / 555G / 777G** のいずれか。
- 到達後はAT当選濃厚CZへ移行。最深777G。
- 天井ゲーム数は有利区間移行時に抽選され、設定差あり。
- 正確な内部ハマりゲーム数は液晶メニューで確認可能と当時解析に記載。

### 天井ゲーム数振り分け

| 設定 | 333G | 555G | 777G |
|---|---:|---:|---:|
| 1 | 2.0% | 18.0% | 80.1% |
| 2 | 3.9% | 21.1% | 75.0% |
| 3 | 7.0% | 25.0% | 68.0% |
| 4 | 9.0% | 27.0% | 64.1% |
| 5 | 12.1% | 32.8% | 55.1% |
| 6 | 16.0% | 34.0% | 50.0% |

※丸めにより合計が100.0/100.1%となる行あり。公開値をそのまま保持し再正規化しない。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_HIGH_FOR_CEILING_STATE_ADVANTAGEOUS_SECTION_POWER_CYCLE / PARTIAL_FOR_DISTINCT_UNCHANGED_AND_GAKKUN
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- **天井リセット**。
- **内部状態リセット後に再抽選**。
- **有利区間ランプ消灯**。
- 設定変更後は非有利区間を経て有利区間へ移行し、その際に天井ゲーム数と通常/高確/超高確状態を設定別に抽選する構造として扱う。
- 朝一開始ステージはパチ7で **オフィスステージ**。ちょんぼりすたではステージを「調査中」とする版もあるため、更新差として注記しパチ7の具体値を採録。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 設定変更なしの据え置きについて、本機専用資料で「据え置き」独立列を設定変更・純電断から三分離した契約は今回固定できなかった。
- ただし複数解析の **電源OFF→ONのみで天井・内部状態・有利区間ランプを引き継ぐ** 契約から、ホール実運用上の据え置き+電断では主要進行を持ち越す根拠が強い。
- distinct unchanged-only contract: `PUBLIC_DISTINCT_UNCHANGED_CONTRACT_NOT_SEPARATELY_FOUND_AFTER_RESEARCH`。

信頼度: ANALYSIS_HIGH_FOR_POWER_CYCLE / UNVERIFIED_FOR_DISTINCT_UNCHANGED_ONLY

### powerCycleBehavior

- **電源OFF→ONのみ: 天井引継ぎ**。
- **内部状態引継ぎ**。
- **有利区間ランプ状態引継ぎ**。
- 設定変更との対比表がちょんぼりすた、パチ7で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset

- 設定変更: **天井ゲーム数リセット**。
- 電源OFF→ONのみ: **引継ぎ**。
- 天井カウントは有利区間移行から開始するため、外部データカウンターとは数Gずれる場合がある。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset

- 設定変更後は有利区間移行時に **333G / 555G / 777G** を再抽選。
- 「一律短縮天井」ではなく、設定別振り分けを持つ可変天井。
- 最深は777G。到達後はAT当選濃厚CZ。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset

- 朝一専用の独立モード名称/モード振り分けは `PUBLIC_DEDICATED_MORNING_MODE_NOT_FOUND_AFTER_RESEARCH`。
- 一方、有利区間移行時の天井ゲーム数抽選は設定別の公開数値があり、朝一設定変更後にも適用される主要な数値契約としてnumericResetDataへ保存。

### stateAfterReset

- 設定変更時は内部状態を再抽選。
- 公開されている有利区間移行時状態振り分け:

| 設定 | 通常 | 高確 | 超高確 |
|---|---:|---:|---:|
| 1 | 63.3% | 34.4% | 2.3% |
| 2 | 61.9% | 35.0% | 3.1% |
| 3 | 59.9% | 35.8% | 4.3% |
| 4 | 58.8% | 36.3% | 5.0% |
| 5 | 56.4% | 37.2% | 6.4% |
| 6 | 54.6% | 38.0% | 7.5% |

- 電源OFF→ONのみでは内部状態を引き継ぐ。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset

- 設定変更: **有利区間RESET / 朝一ランプ消灯**。
- 電源OFF→ONのみ: **有利区間およびランプ状態を引継ぎ**。
- 通常時は有利区間ランプが点灯するタイプと複数解析に記載。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### resetBenefits

- 設定変更により天井ゲーム数と内部状態が再抽選される。
- 公開状態振り分けでは高設定ほど高確/超高確選択率が上昇。
- 天井も高設定ほど333G/555Gが選ばれやすい。
- 一律の「設定変更専用AT直撃率」「朝一特定G以内当選率」は今回の再探索で固定できず、通常の有利区間移行時契約と分離して `PUBLIC_DEDICATED_MORNING_HIT_RATE_NOT_FOUND_AFTER_RESEARCH` とする。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし設定変更で前日の天井進行・内部状態を失うため、前日ハマリ/高確等を期待する客から見れば持越し消滅は実質的不利になり得る。これは仕様上のリセット効果であり、専用ペナルティ抽選ではない。

### resetDetection

- **朝一有利区間ランプ消灯 → 設定変更濃厚**。
- **朝一有利区間ランプ点灯 → 据え置き濃厚**。
- ランプ位置はクレジット左上のドットと公開。
- 店側が数G回す等の対策、前日即ヤメ等の例外があるため「確定」ではなく強い判別材料として保存。
- 本機固有のリールガックン条件/発生率は検索語・資料系統変更後も `PUBLIC_GAKKUN_VALUE_NOT_FOUND_AFTER_RESEARCH`。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE_FOR_LAMP / UNVERIFIED_FOR_GAKKUN

### numericResetData / publicMorningNumbers

#### 有利区間移行時の状態振り分け
- 設定1: 通常63.3% / 高確34.4% / 超高確2.3%
- 設定2: 61.9% / 35.0% / 3.1%
- 設定3: 59.9% / 35.8% / 4.3%
- 設定4: 58.8% / 36.3% / 5.0%
- 設定5: 56.4% / 37.2% / 6.4%
- 設定6: 54.6% / 38.0% / 7.5%

#### 天井ゲーム数振り分け
- 設定1: 333G 2.0% / 555G 18.0% / 777G 80.1%
- 設定2: 3.9% / 21.1% / 75.0%
- 設定3: 7.0% / 25.0% / 68.0%
- 設定4: 9.0% / 27.0% / 64.1%
- 設定5: 12.1% / 32.8% / 55.1%
- 設定6: 16.0% / 34.0% / 50.0%

- 朝一専用AT/CZ直撃率: `PUBLIC_DEDICATED_MORNING_NUMERIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

2026-09-11に `パチスロ1000ちゃん / 1000ちゃん / せんちゃん / Sパチスロ1000ちゃんPX / 9S1223 / オーイズミ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 内部状態 / 有利区間 / ランプ / ガックン / 変更判別` を組み替え、メーカー公式動画、当時業界発表、HAZUSE、1geki、パチ7、ちょんぼりすた、すろぬー、パチビー等を横断。設定変更と純電断の天井/状態/有利区間ランプ契約、状態振り分け、天井振り分けは複数系統で固定。独立した据え置き列とガックン値、朝一専用直撃率は固定できなかったため限定UNVERIFIEDを残した。

## conflicts

### 朝一ステージ資料更新差
- パチ7は設定変更時のステージを **オフィスステージ** と明記。
- ちょんぼりすたの取得版は設定変更時/電断時ともステージ「調査中」。
- 数値競合ではなく公開時点/更新差と判断し、具体的な後発解析値を採録しつつ `SOURCE_UPDATE_DIFFERENCE` として保持。

### 天井表記
- 初期/概説資料には単純に「777G」または「777G+α」とする表記がある。
- 後発詳細解析では **333G / 555G / 777Gの振り分け** が公開。
- 平均化せず、詳細解析をcanonicalとし、初期資料は「最深天井の簡略表記」と定義分離する。

## sources

取得日: 2026-09-11

1. オーイズミ公式YouTube — パチスロ1000ちゃん第2弾ティザーPV
   - https://www.youtube.com/watch?v=FvTZKhrL_kQ
   - 6号機初A+AT、リアルボーナス+純増約2.0枚/G
   - reliability: OFFICIAL
2. PiDEA X — A+ATの「1000ちゃん」を発表／オーイズミ
   - https://www.pidea.jp/articles/aat%E3%81%AE%E3%80%8C1000%E3%81%A1%E3%82%83%E3%82%93%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E3%82%AA%E3%83%BC%E3%82%A4%E3%82%BA%E3%83%9F
   - A+AT、BIG平均150枚/最大180枚、LIVE BONUS平均60枚、AT純増約2.0枚/G、1000★CHANCE 30G
   - reliability: INDUSTRY_CONTEMPORARY
3. パチビー — 「パチスロ1000ちゃん」プレス発表会 / 機種情報
   - https://www.pachibee.jp/pparticles/view/1192
   - https://www.pachibee.jp/machines/kouryaku/219120000
   - A+AT、純増、ボーナス基本性能、導入日
   - reliability: INDUSTRY / ANALYSIS_DB
4. HAZUSE — パチスロ1000ちゃん
   - https://hazuse.com/machine/pachislot/9S1223/
   - https://hazuse.com/machine/pachislot/9S1223/genre/208/
   - 型式Sパチスロ1000ちゃんPX、検定番号9S1223、導入2020-01-06、設定別性能、天井振り分け
   - reliability: ANALYSIS_HIGH_DB
5. 1geki — パチスロ1000ちゃん
   - https://1geki.jp/slot/s_1000chan/
   - 設定別ボーナス/出玉率、導入日、ATゲーム性
   - reliability: ANALYSIS_HIGH
6. ちょんぼりすた — 1000ちゃん スロット解析
   - https://chonborista.com/slot/oizumi-slot/98513/comment-page-6/
   - ベース約37.5G、設定別性能、天井、状態振り分け、設定変更/電断比較、有利区間ランプ判別
   - reliability: ANALYSIS_HIGH
7. パチ7 — 1000ちゃん
   - https://pachiseven.jp/machines_v2/5887
   - 天井333/555/777G、設定別振り分け、設定変更/電断時の天井・内部状態・ランプ、朝一ステージ、判別
   - reliability: ANALYSIS_HIGH
8. すろぬー — パチスロ1000ちゃん
   - https://slonuu.com/pg/s-1000chan
   - 導入2020-01-06、ベース約37.5G、設定別性能、最深天井777G
   - reliability: ANALYSIS_SECONDARY
9. 1geki — 2019年12月新台スケジュール
   - https://1geki.jp/newmachinecalender/201912/
   - 2019-12-23たまピー以降、同月追加スロット掲載なし。年末境界監査用。
   - reliability: ANALYSIS_DB_CALENDAR
10. 1geki — 2020年1月新台スケジュール
   - https://1geki.jp/newmachinecalender/202001/
   - 2020-01-06群が年明け最初の掲載群で、スロット2機。
   - reliability: ANALYSIS_DB_CALENDAR

## missingFields

- 据え置きを純電断から完全に分離した本機専用独立契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用のAT/CZ直撃率または朝一特定G以内当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## recordStatus

- coreStatus: COMPLETE_CORE
- resetBehaviorStatus: COMPLETE_MAJOR_CONTRACTS_WITH_LIMITED_UNVERIFIED
- chronologicalStatus: 2020-01-06_GROUP_OPEN_1_OF_2
