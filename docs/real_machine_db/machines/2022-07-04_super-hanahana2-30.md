# スーパーハナハナ2-30

machineName: スーパーハナハナ2-30
formalModelName: Sスーパーハナハナ2D-30
manufacturer: パイオニア
inspectionCode: 1S1736
releaseDate: 2022-07-04
generation: 6.4号機
systemType: AT / 疑似ボーナス / 30Φ / 連チャンモード
recordNo: 1507
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

- 設定L: UNVERIFIED（公開値調査中表記）
- 設定1: 97.5%
- 設定2: 99.5%
- 設定3: 101.8%
- 設定5: 104.5%
- 設定6: 107.1%

※設定4は搭載しない。設定Lは搭載され、設定L時は下パネルが常時点滅するが、初当り・機械割の公開値は今回の再探索でも固定できず `UNVERIFIED_AFTER_RESEARCH`。

信頼度: HIGH（業界発表 / HAZUSE / 複数解析で一致。設定L数値のみUNVERIFIED）

## initialHitBySetting

### ボーナス初当り
- 設定1: 1/231
- 設定2: 1/224
- 設定3: 1/216
- 設定5: 1/206
- 設定6: 1/197

### BIG / REG / 合算
- 設定1: BIG 1/171 / REG 1/345 / 合算 1/114
- 設定2: BIG 1/164 / REG 1/331 / 合算 1/109
- 設定3: BIG 1/155 / REG 1/315 / 合算 1/104
- 設定5: BIG 1/146 / REG 1/297 / 合算 1/98
- 設定6: BIG 1/137 / REG 1/279 / 合算 1/92

信頼度: HIGH（パイオニア発表を報じる業界記事 / HAZUSE / 複数解析で一致）

## baseGamesPer50

- 約33.6G / 50枚

信頼度: INDUSTRY / ANALYSIS_HIGH

## netIncrease

- 疑似ボーナスAT: 約3.3枚/G
- 独自調査系に約3.34枚/G表記あり。丸め差として分離保持し、canonicalは約3.3枚/G。

信頼度: HIGH

## basicPayout

- BIG CHANCE: 60G、約200枚
- REG CHANCE: 20G、約67枚
- スーハナモード滞在中: ボーナス約1/14、32G以内のボーナス当選濃厚
- スーハナモード期待獲得枚数: A 約580枚 / B 約1000枚 / C 約1560枚

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は完全レバーON抽選でボーナスを抽選するAT機。
- 通常天井は約777Gまたは約999G。約777Gが大半を占め、到達時はBIG濃厚。
- 天井G数の設定別振り分け:
  - 設定1: 777G 95.3% / 999G 4.7%
  - 設定2: 777G 94.5% / 999G 5.5%
  - 設定3: 777G 93.7% / 999G 6.3%
  - 設定5: 777G 92.9% / 999G 7.1%
  - 設定6: 777G 92.2% / 999G 7.8%
- 999G天井が内部選択されていた場合、初当り後の50%でスーハナモードへ移行。
- 通常の初当り後は、32G以内の自力ボーナスでスーハナモード移行濃厚、33〜100Gの自力ボーナスでは50%で移行。
- 有利区間は最大3000Gの6.4号機仕様。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_MINOR_UNVERIFIED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior

- 有利区間: RESET。
- 天井ゲーム数: RESET。
- 内部モード / 内部状態: RESET。
- 設定変更後は通常天井までのゲーム数が32G短縮される。
- 設定変更後・有利区間リセット後は、1〜68G以内にボーナスへ当選した場合、50%でスーハナモードへ移行。

### carryOverBehavior

- 据え置き時は有利区間・天井・内部モード / 内部状態をCARRY_OVER。
- 有利区間ランプは通常時消灯のため、朝一の点灯状態から据え置き/変更を直接判別する用途には使えない。

### powerCycleBehavior

- 設定変更を伴わない純電源OFF→ONでは、有利区間・天井・内部モードをCARRY_OVER。
- 内部状態についても据え置きでは引継ぎとする解析を確認。純電断単独で内部状態だけが別処理になる直接資料は確認できないため、モード/天井/有利区間の直接契約を優先し、内部状態詳細は `CARRY_OVER_SUPPORTED_BY_RESET_TABLE / MINOR_UNVERIFIED_GRANULARITY` とする。

### gameCounterReset

- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常時の基本天井は約777G / 約999G。

### ceilingAfterReset

- 設定変更時および有利区間完走後は、天井までのゲーム数が **32G短縮**。
- 通常の約777G / 約999Gを基準にすると、設定変更後の到達目安は約745G / 約967G相当。
- HAZUSEは朝一968G以上ハマった場合を据え置き濃厚材料として整理している。

### modeAfterReset

- 設定変更: 内部モードRESET。
- 据え置き / 純電源OFF→ON: 内部モードCARRY_OVER。
- スーハナモードA/B/Cの通常移行時振り分けは A 70.2% / B 19.8% / C 10.0%だが、これは設定変更専用振り分けではないためリセット専用値へ転用しない。
- 設定変更時のA/B/C専用振り分けは `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更: 内部状態RESET（NanaPress朝イチ比較表）。
- 据え置き: 内部状態CARRY_OVER。
- 純電断時の内部状態を内部モードと分離して明示する機種固有資料は、検索語・資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。ただし天井・有利区間・内部モードは直接CARRY_OVER確認済み。

### advantageousSectionReset

- 設定変更: 有利区間RESET。
- 据え置き / 純電源OFF→ON: 有利区間CARRY_OVER。
- 有利区間ランプはWINランプ右下のドット。
- 点灯はボーナス開始時、消灯はボーナス終了時。通常時は基本消灯のため変更判別には不向き。

### resetBenefits

- 天井ゲーム数が32G短縮。
- 設定変更後・有利区間リセット後、1〜68G以内のボーナス当選時は50%でスーハナモードへ移行。
- 設定変更後の早い当りに朝一狙い価値があると当時解析で整理されている。

### resetPenalties

- 設定変更固有の主要な公開不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 据え置きで保持される既存モード・天井進行を設定変更で失うケースはあるが、設定変更専用の定量的ペナルティとは扱わない。

### resetDetection

- 有利区間ランプ: 通常時は消灯するため、朝一の変更判別には使用不可。
- 天井挙動: 設定変更時は32G短縮されるため、朝一968G以上ハマれば据え置き濃厚材料。
- 宵越し天井成立を確認できた場合は据え置き材料。
- 設定Lは常時下パネル点滅で識別可能だが、これは通常設定の変更/据え置き判別とは別。
- 本機固有のリールガックン条件 / 発生率、設定変更専用の表示変化は、表記・型式・メーカー名・朝一/リセット/ガックン等で再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時の天井短縮: **32G**。
- 設定変更後 / 有利区間リセット後、**1〜68G以内のボーナス当選 → 50%でスーハナモード移行**。
- 設定変更専用のスーハナモードA/B/C振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後の「68G以内そのもののボーナス当選率」: `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- 朝一リセット専用で直接確認できる比較値は、天井 **32G短縮** と、設定変更後 **1〜68G以内のボーナス当選時50%でスーハナモード移行**。
- 通常の天井振り分け（設定1〜6の777G/999G比率）は公開されているが、設定変更専用の振り分けではないため別扱い。

## resetBehavior QAメモ

- HAZUSEで設定変更 / 電源ON・OFF比較表を確認し、有利区間・天井・内部モードのRESET/CARRY_OVERを直接固定。
- NanaPressで設定変更時の有利区間・天井・内部状態RESET、据え置き時CARRY_OVERを照合。
- パチ＆スロ必勝本で設定変更後68G以内のボーナス当選時50%スーハナモード移行を確認。
- HAZUSEで設定変更時 / 有利区間完走後の天井32G短縮、および朝一968G以上ハマり時の据え置き濃厚材料を確認。
- `スーパーハナハナ2-30 / Sスーパーハナハナ2D-30 / 1S1736 / パイオニア / 2022 / 設定変更 / リセット / 据え置き / 電源ON OFF / 朝一 / 天井短縮 / ガックン / 有利区間` を検索キーとして初代スーパーハナハナと分離した。

## conflicts

- REG基本獲得枚数:
  - canonical: **約67枚** — パイオニア発表を報じる業界記事 / HAZUSE / パチマガスロマガで一致。
  - alternate: **約72枚** — 導入前のPiDEA独自調査簡易スペック。
  - 判定: `CONFLICT_PRERELEASE_SECONDARY_VS_FINAL_MULTI_SOURCE`。平均せず、最終複数一致の約67枚をcoreへ採用。
- 純増約3.3枚/G vs 約3.34枚/Gは丸め精度差として扱い、数値競合にはしない。

## missingFields

- 設定Lの初当り確率 / 機械割: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用スーハナモードA/B/C振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後68G以内のボーナス当選率そのもの: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の内部状態を内部モードと別項目で明記した直接資料: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有リールガックン条件 / 発生率: `UNVERIFIED_AFTER_RESEARCH`。

## confidence

- formalModel / releaseDate / manufacturer: INDUSTRY_HIGH
- inspectionCode: ANALYSIS_HIGH
- performanceCore: HIGH
- resetBehavior: HIGH_WITH_MINOR_UNVERIFIED
- conflictHandling: EXPLICIT

## sources

取得日: 2026-09-13

### メーカー公式
- https://www.slot-pioneer.co.jp/product/super_hanahana2/

### 業界 / 一次寄り
- https://news.p-world.co.jp/articles/20022/nippon
- https://news.p-world.co.jp/articles/20024/yugitsushin
- https://news.p-world.co.jp/articles/20031/greenbelt
- https://p-bomb.co.jp/industry/new-machine/3871/

### 当時解析 / DB
- https://hazuse.com/machine/pachislot/1S1736/
- https://hazuse.com/machine/pachislot/1S1736/genre/207/
- https://p.hisshobon.jp/machine/3886/1/89654
- https://p.hisshobon.jp/machine/3886/1/90301
- https://nana-press.com/kaiseki/machine/362/9175/
- https://1geki.jp/slot/s_shanahana2_30/3/
- https://1geki.jp/slot/s_shanahana2_30/0/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/137/kh01.php
- https://ichikatsu.com/superhanahana2/
- https://chonborista.com/slot/pionia-slot/166212/
- https://www.slopachi-quest.com/article/superhanahana2-settei/

### 同日群 / 次境界監査
- https://ichikatsu.com/newslot2022/
- https://news.p-world.co.jp/articles/21193/greenbelt

## groupAudit

- 2022-07-04 group: `CLOSED_5_OF_5_PROCESSED`。
- 月間カレンダーで確認できた5機は、パチスロ甲鉄城のカバネリ / ニューゲッターマウス / パチスロ犬夜叉 / パチスロ アクエリオン ALL STARS / スーパーハナハナ2-30。
- 5機すべてNo.1503〜1507として処理済み。
- 次のパチスロ導入境界は2022-07-19 `パチスロ鉄拳5`。Greenbelt 2022-07-19新台スケジュールでは同日パチスロ欄は鉄拳5のみ。
